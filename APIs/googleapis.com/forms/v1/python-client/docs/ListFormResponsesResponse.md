# ListFormResponsesResponse

Response to a ListFormResponsesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If set, there are more responses. To get the next page of responses, provide this as &#x60;page_token&#x60; in a future request. | [optional] 
**responses** | [**List[FormResponse]**](FormResponse.md) | The returned form responses. Note: The &#x60;formId&#x60; field is not returned in the &#x60;FormResponse&#x60; object for list requests. | [optional] 

## Example

```python
from openapi_client.models.list_form_responses_response import ListFormResponsesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFormResponsesResponse from a JSON string
list_form_responses_response_instance = ListFormResponsesResponse.from_json(json)
# print the JSON string representation of the object
print(ListFormResponsesResponse.to_json())

# convert the object into a dict
list_form_responses_response_dict = list_form_responses_response_instance.to_dict()
# create an instance of ListFormResponsesResponse from a dict
list_form_responses_response_from_dict = ListFormResponsesResponse.from_dict(list_form_responses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


