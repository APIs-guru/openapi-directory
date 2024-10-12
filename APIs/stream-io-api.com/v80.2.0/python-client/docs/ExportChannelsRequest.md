# ExportChannelsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**List[ChannelExportRequest]**](ChannelExportRequest.md) | Export options for channels | [optional] 
**clear_deleted_message_text** | **bool** | Set if deleted message text should be cleared | [optional] 
**export_users** | **bool** |  | [optional] 
**include_truncated_messages** | **bool** | Set if you want to include truncated messages | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.export_channels_request import ExportChannelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportChannelsRequest from a JSON string
export_channels_request_instance = ExportChannelsRequest.from_json(json)
# print the JSON string representation of the object
print(ExportChannelsRequest.to_json())

# convert the object into a dict
export_channels_request_dict = export_channels_request_instance.to_dict()
# create an instance of ExportChannelsRequest from a dict
export_channels_request_from_dict = ExportChannelsRequest.from_dict(export_channels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


