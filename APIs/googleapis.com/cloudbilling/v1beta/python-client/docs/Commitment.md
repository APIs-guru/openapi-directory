# Commitment

Commitments give you the ability to pay a recurring fee in exchange for a benefit, such as a discount for your use. For example, this object might contain details of a [spend-based committed use discount (CUD)](https://cloud.google.com/docs/cuds#spend_based_commitments). Within a CostScenario, adding a commitment includes the cost of the commitment and any discounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. A name for this commitment. All commitments in a CostScenario must have unique names. Each name may be at most 128 characters long. | [optional] 
**vm_resource_based_cud** | [**VmResourceBasedCud**](VmResourceBasedCud.md) |  | [optional] 

## Example

```python
from openapi_client.models.commitment import Commitment

# TODO update the JSON string below
json = "{}"
# create an instance of Commitment from a JSON string
commitment_instance = Commitment.from_json(json)
# print the JSON string representation of the object
print(Commitment.to_json())

# convert the object into a dict
commitment_dict = commitment_instance.to_dict()
# create an instance of Commitment from a dict
commitment_from_dict = Commitment.from_dict(commitment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


