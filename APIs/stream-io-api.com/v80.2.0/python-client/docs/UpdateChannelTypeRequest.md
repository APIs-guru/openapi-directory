# UpdateChannelTypeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name_from_path** | **str** |  | [optional] 
**automod** | **str** |  | 
**automod_behavior** | **str** |  | [optional] 
**automod_thresholds** | [**ThresholdsRequest**](ThresholdsRequest.md) |  | [optional] 
**blocklist** | **str** |  | [optional] 
**blocklist_behavior** | **str** |  | [optional] 
**commands** | **List[str]** | List of commands that channel supports | [optional] 
**connect_events** | **bool** |  | [optional] 
**custom_events** | **bool** |  | [optional] 
**grants** | **Dict[str, List[str]]** |  | [optional] 
**max_message_length** | **int** |  | [optional] 
**message_retention** | **str** |  | [optional] 
**mutes** | **bool** |  | [optional] 
**permissions** | [**List[PolicyRequest]**](PolicyRequest.md) |  | [optional] 
**push_notifications** | **bool** |  | [optional] 
**quotes** | **bool** |  | [optional] 
**reactions** | **bool** |  | [optional] 
**read_events** | **bool** |  | [optional] 
**reminders** | **bool** |  | [optional] 
**replies** | **bool** |  | [optional] 
**search** | **bool** |  | [optional] 
**typing_events** | **bool** |  | [optional] 
**uploads** | **bool** |  | [optional] 
**url_enrichment** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.update_channel_type_request import UpdateChannelTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChannelTypeRequest from a JSON string
update_channel_type_request_instance = UpdateChannelTypeRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChannelTypeRequest.to_json())

# convert the object into a dict
update_channel_type_request_dict = update_channel_type_request_instance.to_dict()
# create an instance of UpdateChannelTypeRequest from a dict
update_channel_type_request_from_dict = UpdateChannelTypeRequest.from_dict(update_channel_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


