# CreateChannelTypeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automod** | **str** | Enables automatic message moderation | 
**automod_behavior** | **str** | Sets behavior of automatic moderation | [optional] 
**blocklist** | **str** | Name of the blocklist to use | [optional] 
**blocklist_behavior** | **str** | Sets behavior of blocklist | [optional] 
**commands** | **List[str]** | List of commands that channel supports | [optional] 
**connect_events** | **bool** | Connect events support | [optional] 
**custom_events** | **bool** | Enables custom events | [optional] 
**grants** | **Dict[str, List[str]]** |  | [optional] 
**max_message_length** | **int** | Number of maximum message characters | [optional] 
**message_retention** | **str** | Number of days to keep messages. &#39;infinite&#39; disables retention | [optional] 
**mutes** | **bool** | Enables mutes | [optional] 
**name** | **str** | Channel type name | 
**permissions** | [**List[PolicyRequest]**](PolicyRequest.md) | List of permissions for the channel type | [optional] 
**push_notifications** | **bool** | Enables push notifications | [optional] 
**reactions** | **bool** | Enables message reactions | [optional] 
**read_events** | **bool** | Read events support | [optional] 
**replies** | **bool** | Enables message replies (threads) | [optional] 
**search** | **bool** | Enables message search | [optional] 
**typing_events** | **bool** | Typing events support | [optional] 
**uploads** | **bool** | Enables file uploads | [optional] 
**url_enrichment** | **bool** | Enables URL enrichment | [optional] 

## Example

```python
from openapi_client.models.create_channel_type_request import CreateChannelTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateChannelTypeRequest from a JSON string
create_channel_type_request_instance = CreateChannelTypeRequest.from_json(json)
# print the JSON string representation of the object
print(CreateChannelTypeRequest.to_json())

# convert the object into a dict
create_channel_type_request_dict = create_channel_type_request_instance.to_dict()
# create an instance of CreateChannelTypeRequest from a dict
create_channel_type_request_from_dict = CreateChannelTypeRequest.from_dict(create_channel_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


