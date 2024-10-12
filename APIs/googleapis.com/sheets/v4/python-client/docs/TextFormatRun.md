# TextFormatRun

A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | [**TextFormat**](TextFormat.md) |  | [optional] 
**start_index** | **int** | The zero-based character index where this run starts, in UTF-16 code units. | [optional] 

## Example

```python
from openapi_client.models.text_format_run import TextFormatRun

# TODO update the JSON string below
json = "{}"
# create an instance of TextFormatRun from a JSON string
text_format_run_instance = TextFormatRun.from_json(json)
# print the JSON string representation of the object
print(TextFormatRun.to_json())

# convert the object into a dict
text_format_run_dict = text_format_run_instance.to_dict()
# create an instance of TextFormatRun from a dict
text_format_run_from_dict = TextFormatRun.from_dict(text_format_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


