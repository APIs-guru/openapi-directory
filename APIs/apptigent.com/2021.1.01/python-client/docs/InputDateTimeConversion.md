# InputDateTimeConversion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Display format (defaults to &#39;yyyy-MM-dd HH:mm:ss&#39;) | [optional] 
**input** | **str** | Source date and time | 
**source** | **str** |  | [default to 'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London']
**target** | **str** |  | [default to 'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London']

## Example

```python
from openapi_client.models.input_date_time_conversion import InputDateTimeConversion

# TODO update the JSON string below
json = "{}"
# create an instance of InputDateTimeConversion from a JSON string
input_date_time_conversion_instance = InputDateTimeConversion.from_json(json)
# print the JSON string representation of the object
print(InputDateTimeConversion.to_json())

# convert the object into a dict
input_date_time_conversion_dict = input_date_time_conversion_instance.to_dict()
# create an instance of InputDateTimeConversion from a dict
input_date_time_conversion_from_dict = InputDateTimeConversion.from_dict(input_date_time_conversion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


