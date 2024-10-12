# TextRun

A TextElement kind that represents a run of text that all has the same styling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The text of this run. | [optional] 
**style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_run import TextRun

# TODO update the JSON string below
json = "{}"
# create an instance of TextRun from a JSON string
text_run_instance = TextRun.from_json(json)
# print the JSON string representation of the object
print(TextRun.to_json())

# convert the object into a dict
text_run_dict = text_run_instance.to_dict()
# create an instance of TextRun from a dict
text_run_from_dict = TextRun.from_dict(text_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


