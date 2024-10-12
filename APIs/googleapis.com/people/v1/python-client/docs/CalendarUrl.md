# CalendarUrl

A person's calendar URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_type** | **str** | Output only. The type of the calendar URL translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The type of the calendar URL. The type can be custom or one of these predefined values: * &#x60;home&#x60; * &#x60;freeBusy&#x60; * &#x60;work&#x60; | [optional] 
**url** | **str** | The calendar URL. | [optional] 

## Example

```python
from openapi_client.models.calendar_url import CalendarUrl

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarUrl from a JSON string
calendar_url_instance = CalendarUrl.from_json(json)
# print the JSON string representation of the object
print(CalendarUrl.to_json())

# convert the object into a dict
calendar_url_dict = calendar_url_instance.to_dict()
# create an instance of CalendarUrl from a dict
calendar_url_from_dict = CalendarUrl.from_dict(calendar_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


