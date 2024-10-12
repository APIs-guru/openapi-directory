# GoogleCloudDialogflowCxV3ListTestCasesResponse

The response message for TestCases.ListTestCases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**test_cases** | [**List[GoogleCloudDialogflowCxV3TestCase]**](GoogleCloudDialogflowCxV3TestCase.md) | The list of test cases. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_list_test_cases_response import GoogleCloudDialogflowCxV3ListTestCasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ListTestCasesResponse from a JSON string
google_cloud_dialogflow_cx_v3_list_test_cases_response_instance = GoogleCloudDialogflowCxV3ListTestCasesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ListTestCasesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_list_test_cases_response_dict = google_cloud_dialogflow_cx_v3_list_test_cases_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ListTestCasesResponse from a dict
google_cloud_dialogflow_cx_v3_list_test_cases_response_from_dict = GoogleCloudDialogflowCxV3ListTestCasesResponse.from_dict(google_cloud_dialogflow_cx_v3_list_test_cases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


