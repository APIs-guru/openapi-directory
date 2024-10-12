# TimezoneCodeGet

The TimezoneCode resource is a set of codes that describes the different international timezones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_name** | **str** | The name of the code. | [optional] [readonly] 
**id** | **str** | The unique identifier of the resource instance. | [optional] 
**offset_from_utc** | **float** | The numeric offset from the UTC timezone. | [optional] [readonly] 
**timezone_date_string** | **str** | The text offset from the UTC timezone that forms part of the ISO 8601 date time format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.timezone_code_get import TimezoneCodeGet

# TODO update the JSON string below
json = "{}"
# create an instance of TimezoneCodeGet from a JSON string
timezone_code_get_instance = TimezoneCodeGet.from_json(json)
# print the JSON string representation of the object
print(TimezoneCodeGet.to_json())

# convert the object into a dict
timezone_code_get_dict = timezone_code_get_instance.to_dict()
# create an instance of TimezoneCodeGet from a dict
timezone_code_get_from_dict = TimezoneCodeGet.from_dict(timezone_code_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


