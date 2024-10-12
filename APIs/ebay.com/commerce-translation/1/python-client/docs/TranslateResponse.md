# TranslateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**translations** | [**List[Translation]**](Translation.md) | The list of translations. | [optional] 

## Example

```python
from openapi_client.models.translate_response import TranslateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TranslateResponse from a JSON string
translate_response_instance = TranslateResponse.from_json(json)
# print the JSON string representation of the object
print(TranslateResponse.to_json())

# convert the object into a dict
translate_response_dict = translate_response_instance.to_dict()
# create an instance of TranslateResponse from a dict
translate_response_from_dict = TranslateResponse.from_dict(translate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


