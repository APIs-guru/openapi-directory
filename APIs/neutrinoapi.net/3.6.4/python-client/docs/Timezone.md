# Timezone

Map containing timezone details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbr** | **str** | The time zone abbreviation | 
**var_date** | **str** | The current date at the time zone (ISO 8601 format &#39;YYYY-MM-DD&#39;) | 
**id** | **str** | The time zone ID as per the IANA time zone database (tzdata) | 
**name** | **str** | The full time zone name | 
**offset** | **str** | The UTC offset for the time zone (ISO 8601 format &#39;±hh:mm&#39;) | 
**time** | **str** | The current time at the time zone (ISO 8601 format &#39;hh:mm:ss.sss&#39;) | 

## Example

```python
from openapi_client.models.timezone import Timezone

# TODO update the JSON string below
json = "{}"
# create an instance of Timezone from a JSON string
timezone_instance = Timezone.from_json(json)
# print the JSON string representation of the object
print(Timezone.to_json())

# convert the object into a dict
timezone_dict = timezone_instance.to_dict()
# create an instance of Timezone from a dict
timezone_from_dict = Timezone.from_dict(timezone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


