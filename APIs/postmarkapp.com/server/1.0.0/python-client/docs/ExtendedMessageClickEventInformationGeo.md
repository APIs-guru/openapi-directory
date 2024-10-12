# ExtendedMessageClickEventInformationGeo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**coords** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**country_iso_code** | **str** |  | [optional] 
**ip** | **str** |  | [optional] 
**region** | **str** |  | [optional] 
**region_iso_code** | **str** |  | [optional] 
**zip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.extended_message_click_event_information_geo import ExtendedMessageClickEventInformationGeo

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedMessageClickEventInformationGeo from a JSON string
extended_message_click_event_information_geo_instance = ExtendedMessageClickEventInformationGeo.from_json(json)
# print the JSON string representation of the object
print(ExtendedMessageClickEventInformationGeo.to_json())

# convert the object into a dict
extended_message_click_event_information_geo_dict = extended_message_click_event_information_geo_instance.to_dict()
# create an instance of ExtendedMessageClickEventInformationGeo from a dict
extended_message_click_event_information_geo_from_dict = ExtendedMessageClickEventInformationGeo.from_dict(extended_message_click_event_information_geo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


