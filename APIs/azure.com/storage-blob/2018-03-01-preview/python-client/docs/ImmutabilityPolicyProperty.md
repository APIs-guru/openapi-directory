# ImmutabilityPolicyProperty

The properties of an ImmutabilityPolicy of a blob container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**immutability_period_since_creation_in_days** | **int** | The immutability period for the blobs in the container since the policy creation, in days. | 
**state** | **str** | The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked. | [optional] [readonly] 

## Example

```python
from openapi_client.models.immutability_policy_property import ImmutabilityPolicyProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ImmutabilityPolicyProperty from a JSON string
immutability_policy_property_instance = ImmutabilityPolicyProperty.from_json(json)
# print the JSON string representation of the object
print(ImmutabilityPolicyProperty.to_json())

# convert the object into a dict
immutability_policy_property_dict = immutability_policy_property_instance.to_dict()
# create an instance of ImmutabilityPolicyProperty from a dict
immutability_policy_property_from_dict = ImmutabilityPolicyProperty.from_dict(immutability_policy_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


