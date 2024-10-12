# ExtendedMessageOpenEventInformation



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client** | [**ExtendedMessageClickEventInformationClient**](ExtendedMessageClickEventInformationClient.md) |  | [optional] 
**first_open** | **bool** |  | [optional] 
**geo** | [**ExtendedMessageClickEventInformationGeo**](ExtendedMessageClickEventInformationGeo.md) |  | [optional] 
**message_id** | **str** |  | [optional] 
**os** | [**ExtendedMessageClickEventInformationOS**](ExtendedMessageClickEventInformationOS.md) |  | [optional] 
**platform** | **str** |  | [optional] 
**received_at** | **datetime** |  | [optional] 
**recipient** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**user_agent** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.extended_message_open_event_information import ExtendedMessageOpenEventInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedMessageOpenEventInformation from a JSON string
extended_message_open_event_information_instance = ExtendedMessageOpenEventInformation.from_json(json)
# print the JSON string representation of the object
print(ExtendedMessageOpenEventInformation.to_json())

# convert the object into a dict
extended_message_open_event_information_dict = extended_message_open_event_information_instance.to_dict()
# create an instance of ExtendedMessageOpenEventInformation from a dict
extended_message_open_event_information_from_dict = ExtendedMessageOpenEventInformation.from_dict(extended_message_open_event_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


