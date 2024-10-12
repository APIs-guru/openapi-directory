# ListExamplesResponse

Response message for ListExamples.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**examples** | [**List[Example]**](Example.md) | The sentence pairs. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this token to the page_token field in the ListExamplesRequest to obtain the corresponding page. | [optional] 

## Example

```python
from openapi_client.models.list_examples_response import ListExamplesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListExamplesResponse from a JSON string
list_examples_response_instance = ListExamplesResponse.from_json(json)
# print the JSON string representation of the object
print(ListExamplesResponse.to_json())

# convert the object into a dict
list_examples_response_dict = list_examples_response_instance.to_dict()
# create an instance of ListExamplesResponse from a dict
list_examples_response_from_dict = ListExamplesResponse.from_dict(list_examples_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


