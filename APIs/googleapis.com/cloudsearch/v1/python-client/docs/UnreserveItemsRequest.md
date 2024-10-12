# UnreserveItemsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_name** | **str** | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} | [optional] 
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**queue** | **str** | The name of a queue to unreserve items from. | [optional] 

## Example

```python
from openapi_client.models.unreserve_items_request import UnreserveItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnreserveItemsRequest from a JSON string
unreserve_items_request_instance = UnreserveItemsRequest.from_json(json)
# print the JSON string representation of the object
print(UnreserveItemsRequest.to_json())

# convert the object into a dict
unreserve_items_request_dict = unreserve_items_request_instance.to_dict()
# create an instance of UnreserveItemsRequest from a dict
unreserve_items_request_from_dict = UnreserveItemsRequest.from_dict(unreserve_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


