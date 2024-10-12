# InputJsonConversionHTML


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate** | **str** | Alternate header row markup | [optional] 
**attributes** | **str** | Optional table attributes (single quoted values) | [optional] 
**header** | **bool** | Include header row | [default to True]
**input** | **str** | JSON array object | 
**omit** | **str** | Columns to omit (comma separated) | [optional] 
**order** | **str** | Column order (comma separated) | [optional] 

## Example

```python
from openapi_client.models.input_json_conversion_html import InputJsonConversionHTML

# TODO update the JSON string below
json = "{}"
# create an instance of InputJsonConversionHTML from a JSON string
input_json_conversion_html_instance = InputJsonConversionHTML.from_json(json)
# print the JSON string representation of the object
print(InputJsonConversionHTML.to_json())

# convert the object into a dict
input_json_conversion_html_dict = input_json_conversion_html_instance.to_dict()
# create an instance of InputJsonConversionHTML from a dict
input_json_conversion_html_from_dict = InputJsonConversionHTML.from_dict(input_json_conversion_html_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


