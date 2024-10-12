# ListPhraseSetResponse

Message returned to the client by the `ListPhraseSet` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**phrase_sets** | [**List[PhraseSet]**](PhraseSet.md) | The phrase set. | [optional] 

## Example

```python
from openapi_client.models.list_phrase_set_response import ListPhraseSetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPhraseSetResponse from a JSON string
list_phrase_set_response_instance = ListPhraseSetResponse.from_json(json)
# print the JSON string representation of the object
print(ListPhraseSetResponse.to_json())

# convert the object into a dict
list_phrase_set_response_dict = list_phrase_set_response_instance.to_dict()
# create an instance of ListPhraseSetResponse from a dict
list_phrase_set_response_from_dict = ListPhraseSetResponse.from_dict(list_phrase_set_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


