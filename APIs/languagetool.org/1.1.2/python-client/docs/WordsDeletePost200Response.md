# WordsDeletePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | true if the word has been removed. false means the word hasn&#39;t been removed because it was not in the dictionary. | [optional] 

## Example

```python
from openapi_client.models.words_delete_post200_response import WordsDeletePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WordsDeletePost200Response from a JSON string
words_delete_post200_response_instance = WordsDeletePost200Response.from_json(json)
# print the JSON string representation of the object
print(WordsDeletePost200Response.to_json())

# convert the object into a dict
words_delete_post200_response_dict = words_delete_post200_response_instance.to_dict()
# create an instance of WordsDeletePost200Response from a dict
words_delete_post200_response_from_dict = WordsDeletePost200Response.from_dict(words_delete_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


