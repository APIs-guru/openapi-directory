# GoogleCloudDocumentaiV1beta3ListEvaluationsResponse

The response from `ListEvaluations`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluations** | [**List[GoogleCloudDocumentaiV1beta3Evaluation]**](GoogleCloudDocumentaiV1beta3Evaluation.md) | The evaluations requested. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_list_evaluations_response import GoogleCloudDocumentaiV1beta3ListEvaluationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ListEvaluationsResponse from a JSON string
google_cloud_documentai_v1beta3_list_evaluations_response_instance = GoogleCloudDocumentaiV1beta3ListEvaluationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ListEvaluationsResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_list_evaluations_response_dict = google_cloud_documentai_v1beta3_list_evaluations_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ListEvaluationsResponse from a dict
google_cloud_documentai_v1beta3_list_evaluations_response_from_dict = GoogleCloudDocumentaiV1beta3ListEvaluationsResponse.from_dict(google_cloud_documentai_v1beta3_list_evaluations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


