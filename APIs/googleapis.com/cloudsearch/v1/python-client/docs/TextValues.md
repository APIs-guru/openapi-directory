# TextValues

List of text values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | The maximum allowable length for text values is 2048 characters. | [optional] 

## Example

```python
from openapi_client.models.text_values import TextValues

# TODO update the JSON string below
json = "{}"
# create an instance of TextValues from a JSON string
text_values_instance = TextValues.from_json(json)
# print the JSON string representation of the object
print(TextValues.to_json())

# convert the object into a dict
text_values_dict = text_values_instance.to_dict()
# create an instance of TextValues from a dict
text_values_from_dict = TextValues.from_dict(text_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


