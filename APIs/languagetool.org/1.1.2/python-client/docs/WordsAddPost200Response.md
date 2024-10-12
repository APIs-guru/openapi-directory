# WordsAddPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | **bool** | true if the word has been added. false means the word hasn&#39;t been added because it had been added before. | [optional] 

## Example

```python
from openapi_client.models.words_add_post200_response import WordsAddPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WordsAddPost200Response from a JSON string
words_add_post200_response_instance = WordsAddPost200Response.from_json(json)
# print the JSON string representation of the object
print(WordsAddPost200Response.to_json())

# convert the object into a dict
words_add_post200_response_dict = words_add_post200_response_instance.to_dict()
# create an instance of WordsAddPost200Response from a dict
words_add_post200_response_from_dict = WordsAddPost200Response.from_dict(words_add_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


