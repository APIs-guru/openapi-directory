# ChannelExportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cid** | **str** |  | [optional] 
**id** | **str** | Channel ID | [optional] 
**messages_since** | **datetime** | Date to export messages since | [optional] 
**messages_until** | **datetime** | Date to export messages until | [optional] 
**type** | **str** | Channel type | [optional] 

## Example

```python
from openapi_client.models.channel_export_request import ChannelExportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelExportRequest from a JSON string
channel_export_request_instance = ChannelExportRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelExportRequest.to_json())

# convert the object into a dict
channel_export_request_dict = channel_export_request_instance.to_dict()
# create an instance of ChannelExportRequest from a dict
channel_export_request_from_dict = ChannelExportRequest.from_dict(channel_export_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


