# TimezoneCodeJsonldGet

The TimezoneCode resource is a set of codes that describes the different international timezones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**code_name** | **str** | The name of the code. | [optional] [readonly] 
**id** | **str** | The unique identifier of the resource instance. | [optional] 
**offset_from_utc** | **float** | The numeric offset from the UTC timezone. | [optional] [readonly] 
**timezone_date_string** | **str** | The text offset from the UTC timezone that forms part of the ISO 8601 date time format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.timezone_code_jsonld_get import TimezoneCodeJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TimezoneCodeJsonldGet from a JSON string
timezone_code_jsonld_get_instance = TimezoneCodeJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TimezoneCodeJsonldGet.to_json())

# convert the object into a dict
timezone_code_jsonld_get_dict = timezone_code_jsonld_get_instance.to_dict()
# create an instance of TimezoneCodeJsonldGet from a dict
timezone_code_jsonld_get_from_dict = TimezoneCodeJsonldGet.from_dict(timezone_code_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


