# MonetaryCommitment

Indicates that a monetary commitment is required for this offer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_meter_ids** | **List[str]** | An array of meter ids that are excluded from the given offer terms. | [optional] 
**tiered_discount** | **Dict[str, float]** | The list of key/value pairs for the tiered meter rates, in the format &#39;key&#39;:&#39;value&#39; where key &#x3D; price, and value &#x3D; the corresponding discount percentage. This field is used only by offer terms of type &#39;Monetary Commitment&#39;. | [optional] 

## Example

```python
from openapi_client.models.monetary_commitment import MonetaryCommitment

# TODO update the JSON string below
json = "{}"
# create an instance of MonetaryCommitment from a JSON string
monetary_commitment_instance = MonetaryCommitment.from_json(json)
# print the JSON string representation of the object
print(MonetaryCommitment.to_json())

# convert the object into a dict
monetary_commitment_dict = monetary_commitment_instance.to_dict()
# create an instance of MonetaryCommitment from a dict
monetary_commitment_from_dict = MonetaryCommitment.from_dict(monetary_commitment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


