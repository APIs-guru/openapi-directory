# SuppressionContract

The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suppression_id** | **str** | The GUID of the suppression. | [optional] 
**ttl** | **str** | The duration for which the suppression is valid. | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**location** | **str** | The location of the resource. This cannot be changed after the resource is created. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.suppression_contract import SuppressionContract

# TODO update the JSON string below
json = "{}"
# create an instance of SuppressionContract from a JSON string
suppression_contract_instance = SuppressionContract.from_json(json)
# print the JSON string representation of the object
print(SuppressionContract.to_json())

# convert the object into a dict
suppression_contract_dict = suppression_contract_instance.to_dict()
# create an instance of SuppressionContract from a dict
suppression_contract_from_dict = SuppressionContract.from_dict(suppression_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


