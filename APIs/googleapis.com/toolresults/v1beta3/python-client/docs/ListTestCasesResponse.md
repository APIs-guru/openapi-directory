# ListTestCasesResponse

Response message for StepService.ListTestCases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**test_cases** | [**List[TestCase]**](TestCase.md) | List of test cases. | [optional] 

## Example

```python
from openapi_client.models.list_test_cases_response import ListTestCasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTestCasesResponse from a JSON string
list_test_cases_response_instance = ListTestCasesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTestCasesResponse.to_json())

# convert the object into a dict
list_test_cases_response_dict = list_test_cases_response_instance.to_dict()
# create an instance of ListTestCasesResponse from a dict
list_test_cases_response_from_dict = ListTestCasesResponse.from_dict(list_test_cases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


