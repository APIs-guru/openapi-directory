# StartUploadItemRequest

Start upload file request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_name** | **str** | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} | [optional] 
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.start_upload_item_request import StartUploadItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartUploadItemRequest from a JSON string
start_upload_item_request_instance = StartUploadItemRequest.from_json(json)
# print the JSON string representation of the object
print(StartUploadItemRequest.to_json())

# convert the object into a dict
start_upload_item_request_dict = start_upload_item_request_instance.to_dict()
# create an instance of StartUploadItemRequest from a dict
start_upload_item_request_from_dict = StartUploadItemRequest.from_dict(start_upload_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


