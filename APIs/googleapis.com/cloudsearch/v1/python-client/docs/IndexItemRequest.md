# IndexItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_name** | **str** | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} | [optional] 
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**index_item_options** | [**IndexItemOptions**](IndexItemOptions.md) |  | [optional] 
**item** | [**Item**](Item.md) |  | [optional] 
**mode** | **str** | Required. The RequestMode for this request. | [optional] 

## Example

```python
from openapi_client.models.index_item_request import IndexItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IndexItemRequest from a JSON string
index_item_request_instance = IndexItemRequest.from_json(json)
# print the JSON string representation of the object
print(IndexItemRequest.to_json())

# convert the object into a dict
index_item_request_dict = index_item_request_instance.to_dict()
# create an instance of IndexItemRequest from a dict
index_item_request_from_dict = IndexItemRequest.from_dict(index_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


