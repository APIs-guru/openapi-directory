# ResultDisplayLine

The collection of fields that make up a displayed line

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ResultDisplayField]**](ResultDisplayField.md) |  | [optional] 

## Example

```python
from openapi_client.models.result_display_line import ResultDisplayLine

# TODO update the JSON string below
json = "{}"
# create an instance of ResultDisplayLine from a JSON string
result_display_line_instance = ResultDisplayLine.from_json(json)
# print the JSON string representation of the object
print(ResultDisplayLine.to_json())

# convert the object into a dict
result_display_line_dict = result_display_line_instance.to_dict()
# create an instance of ResultDisplayLine from a dict
result_display_line_from_dict = ResultDisplayLine.from_dict(result_display_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


