# AckOrResolveResult

The results of ack/resolve for a individual incident

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cmd_accepted** | **bool** |  | [optional] 
**entity_id** | **str** |  | [optional] 
**incident_number** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ack_or_resolve_result import AckOrResolveResult

# TODO update the JSON string below
json = "{}"
# create an instance of AckOrResolveResult from a JSON string
ack_or_resolve_result_instance = AckOrResolveResult.from_json(json)
# print the JSON string representation of the object
print(AckOrResolveResult.to_json())

# convert the object into a dict
ack_or_resolve_result_dict = ack_or_resolve_result_instance.to_dict()
# create an instance of AckOrResolveResult from a dict
ack_or_resolve_result_from_dict = AckOrResolveResult.from_dict(ack_or_resolve_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


