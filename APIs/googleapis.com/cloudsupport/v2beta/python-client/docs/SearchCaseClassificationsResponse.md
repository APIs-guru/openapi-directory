# SearchCaseClassificationsResponse

The response message for SearchCaseClassifications endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_classifications** | [**List[CaseClassification]**](CaseClassification.md) | The classifications retrieved. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Set this in the &#x60;page_token&#x60; field of subsequent &#x60;caseClassifications.list&#x60; requests. If unspecified, there are no more results to retrieve. | [optional] 

## Example

```python
from openapi_client.models.search_case_classifications_response import SearchCaseClassificationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchCaseClassificationsResponse from a JSON string
search_case_classifications_response_instance = SearchCaseClassificationsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchCaseClassificationsResponse.to_json())

# convert the object into a dict
search_case_classifications_response_dict = search_case_classifications_response_instance.to_dict()
# create an instance of SearchCaseClassificationsResponse from a dict
search_case_classifications_response_from_dict = SearchCaseClassificationsResponse.from_dict(search_case_classifications_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


