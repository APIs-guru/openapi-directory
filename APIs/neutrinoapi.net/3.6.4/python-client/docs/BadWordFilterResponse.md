# BadWordFilterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bad_words_list** | **List[str]** | An array of the bad words found | 
**bad_words_total** | **int** | Total number of bad words detected | 
**censored_content** | **str** | The censored content (only set if censor-character has been set) | 
**is_bad** | **bool** | Does the text contain bad words | 

## Example

```python
from openapi_client.models.bad_word_filter_response import BadWordFilterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BadWordFilterResponse from a JSON string
bad_word_filter_response_instance = BadWordFilterResponse.from_json(json)
# print the JSON string representation of the object
print(BadWordFilterResponse.to_json())

# convert the object into a dict
bad_word_filter_response_dict = bad_word_filter_response_instance.to_dict()
# create an instance of BadWordFilterResponse from a dict
bad_word_filter_response_from_dict = BadWordFilterResponse.from_dict(bad_word_filter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


