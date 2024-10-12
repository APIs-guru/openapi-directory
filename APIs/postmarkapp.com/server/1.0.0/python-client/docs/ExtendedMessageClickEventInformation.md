# ExtendedMessageClickEventInformation



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_location** | **str** |  | [optional] 
**client** | [**ExtendedMessageClickEventInformationClient**](ExtendedMessageClickEventInformationClient.md) |  | [optional] 
**geo** | [**ExtendedMessageClickEventInformationGeo**](ExtendedMessageClickEventInformationGeo.md) |  | [optional] 
**message_id** | **str** |  | [optional] 
**os** | [**ExtendedMessageClickEventInformationOS**](ExtendedMessageClickEventInformationOS.md) |  | [optional] 
**original_link** | **str** |  | [optional] 
**platform** | **str** |  | [optional] 
**received_at** | **datetime** |  | [optional] 
**recipient** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**user_agent** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.extended_message_click_event_information import ExtendedMessageClickEventInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedMessageClickEventInformation from a JSON string
extended_message_click_event_information_instance = ExtendedMessageClickEventInformation.from_json(json)
# print the JSON string representation of the object
print(ExtendedMessageClickEventInformation.to_json())

# convert the object into a dict
extended_message_click_event_information_dict = extended_message_click_event_information_instance.to_dict()
# create an instance of ExtendedMessageClickEventInformation from a dict
extended_message_click_event_information_from_dict = ExtendedMessageClickEventInformation.from_dict(extended_message_click_event_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


