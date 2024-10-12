# PushItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_name** | **str** | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} | [optional] 
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**item** | [**PushItem**](PushItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.push_item_request import PushItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PushItemRequest from a JSON string
push_item_request_instance = PushItemRequest.from_json(json)
# print the JSON string representation of the object
print(PushItemRequest.to_json())

# convert the object into a dict
push_item_request_dict = push_item_request_instance.to_dict()
# create an instance of PushItemRequest from a dict
push_item_request_from_dict = PushItemRequest.from_dict(push_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


