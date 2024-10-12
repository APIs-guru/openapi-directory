# CreateChannelTypeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automod** | **str** |  | 
**automod_behavior** | **str** |  | 
**automod_thresholds** | [**Thresholds**](Thresholds.md) |  | [optional] 
**blocklist** | **str** |  | [optional] 
**blocklist_behavior** | **str** |  | [optional] 
**commands** | **List[str]** |  | 
**connect_events** | **bool** |  | 
**created_at** | **datetime** |  | 
**custom_events** | **bool** |  | 
**duration** | **str** |  | 
**grants** | **Dict[str, List[str]]** |  | 
**max_message_length** | **int** |  | 
**message_retention** | **str** |  | 
**mutes** | **bool** |  | 
**name** | **str** |  | 
**permissions** | [**List[PolicyRequest1]**](PolicyRequest1.md) |  | 
**push_notifications** | **bool** |  | 
**quotes** | **bool** |  | 
**reactions** | **bool** |  | 
**read_events** | **bool** |  | 
**reminders** | **bool** |  | 
**replies** | **bool** |  | 
**search** | **bool** |  | 
**typing_events** | **bool** |  | 
**updated_at** | **datetime** |  | 
**uploads** | **bool** |  | 
**url_enrichment** | **bool** |  | 

## Example

```python
from openapi_client.models.create_channel_type_response import CreateChannelTypeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateChannelTypeResponse from a JSON string
create_channel_type_response_instance = CreateChannelTypeResponse.from_json(json)
# print the JSON string representation of the object
print(CreateChannelTypeResponse.to_json())

# convert the object into a dict
create_channel_type_response_dict = create_channel_type_response_instance.to_dict()
# create an instance of CreateChannelTypeResponse from a dict
create_channel_type_response_from_dict = CreateChannelTypeResponse.from_dict(create_channel_type_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


