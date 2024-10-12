# ListCasesResponse

The response message for the ListCases endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cases** | [**List[Case]**](Case.md) | The list of cases associated with the parent after any filters have been applied. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Set this in the &#x60;page_token&#x60; field of subsequent &#x60;cases.list&#x60; requests. If unspecified, there are no more results to retrieve. | [optional] 

## Example

```python
from openapi_client.models.list_cases_response import ListCasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCasesResponse from a JSON string
list_cases_response_instance = ListCasesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCasesResponse.to_json())

# convert the object into a dict
list_cases_response_dict = list_cases_response_instance.to_dict()
# create an instance of ListCasesResponse from a dict
list_cases_response_from_dict = ListCasesResponse.from_dict(list_cases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


