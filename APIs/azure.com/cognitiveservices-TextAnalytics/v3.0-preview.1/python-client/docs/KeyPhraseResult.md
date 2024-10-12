# KeyPhraseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[DocumentKeyPhrases]**](DocumentKeyPhrases.md) | Response by document | 
**errors** | [**List[DocumentError]**](DocumentError.md) | Errors by document id. | 
**model_version** | **str** | This field indicates which model is used for scoring. | 
**statistics** | [**RequestStatistics**](RequestStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.key_phrase_result import KeyPhraseResult

# TODO update the JSON string below
json = "{}"
# create an instance of KeyPhraseResult from a JSON string
key_phrase_result_instance = KeyPhraseResult.from_json(json)
# print the JSON string representation of the object
print(KeyPhraseResult.to_json())

# convert the object into a dict
key_phrase_result_dict = key_phrase_result_instance.to_dict()
# create an instance of KeyPhraseResult from a dict
key_phrase_result_from_dict = KeyPhraseResult.from_dict(key_phrase_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


