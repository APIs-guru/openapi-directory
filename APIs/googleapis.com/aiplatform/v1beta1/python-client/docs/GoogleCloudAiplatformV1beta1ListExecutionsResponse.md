# GoogleCloudAiplatformV1beta1ListExecutionsResponse

Response message for MetadataService.ListExecutions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executions** | [**List[GoogleCloudAiplatformV1beta1Execution]**](GoogleCloudAiplatformV1beta1Execution.md) | The Executions retrieved from the MetadataStore. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListExecutionsRequest.page_token to retrieve the next page. If this field is not populated, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_executions_response import GoogleCloudAiplatformV1beta1ListExecutionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListExecutionsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_executions_response_instance = GoogleCloudAiplatformV1beta1ListExecutionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListExecutionsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_executions_response_dict = google_cloud_aiplatform_v1beta1_list_executions_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListExecutionsResponse from a dict
google_cloud_aiplatform_v1beta1_list_executions_response_from_dict = GoogleCloudAiplatformV1beta1ListExecutionsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_executions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


