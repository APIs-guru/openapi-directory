# GetExportChannelsStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**duration** | **str** |  | 
**error** | [**ErrorResult**](ErrorResult.md) |  | [optional] 
**result** | [**ExportChannelsResult**](ExportChannelsResult.md) |  | [optional] 
**status** | **str** |  | 
**task_id** | **str** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.get_export_channels_status_response import GetExportChannelsStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetExportChannelsStatusResponse from a JSON string
get_export_channels_status_response_instance = GetExportChannelsStatusResponse.from_json(json)
# print the JSON string representation of the object
print(GetExportChannelsStatusResponse.to_json())

# convert the object into a dict
get_export_channels_status_response_dict = get_export_channels_status_response_instance.to_dict()
# create an instance of GetExportChannelsStatusResponse from a dict
get_export_channels_status_response_from_dict = GetExportChannelsStatusResponse.from_dict(get_export_channels_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


