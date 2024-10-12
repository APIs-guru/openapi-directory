# InputDateTimeFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**culture** | **str** | Language culture | [default to 'en-US']
**format** | **str** | Output format | 
**input** | **str** | Source date and time | 

## Example

```python
from openapi_client.models.input_date_time_format import InputDateTimeFormat

# TODO update the JSON string below
json = "{}"
# create an instance of InputDateTimeFormat from a JSON string
input_date_time_format_instance = InputDateTimeFormat.from_json(json)
# print the JSON string representation of the object
print(InputDateTimeFormat.to_json())

# convert the object into a dict
input_date_time_format_dict = input_date_time_format_instance.to_dict()
# create an instance of InputDateTimeFormat from a dict
input_date_time_format_from_dict = InputDateTimeFormat.from_dict(input_date_time_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


