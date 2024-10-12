# TextList

Wrapper for Text List Field value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[Text]**](Text.md) | Text values. | [optional] 

## Example

```python
from openapi_client.models.text_list import TextList

# TODO update the JSON string below
json = "{}"
# create an instance of TextList from a JSON string
text_list_instance = TextList.from_json(json)
# print the JSON string representation of the object
print(TextList.to_json())

# convert the object into a dict
text_list_dict = text_list_instance.to_dict()
# create an instance of TextList from a dict
text_list_from_dict = TextList.from_dict(text_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


