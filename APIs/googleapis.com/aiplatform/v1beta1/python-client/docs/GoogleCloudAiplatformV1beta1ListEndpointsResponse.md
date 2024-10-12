# GoogleCloudAiplatformV1beta1ListEndpointsResponse

Response message for EndpointService.ListEndpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints** | [**List[GoogleCloudAiplatformV1beta1Endpoint]**](GoogleCloudAiplatformV1beta1Endpoint.md) | List of Endpoints in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListEndpointsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_endpoints_response import GoogleCloudAiplatformV1beta1ListEndpointsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListEndpointsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_endpoints_response_instance = GoogleCloudAiplatformV1beta1ListEndpointsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListEndpointsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_endpoints_response_dict = google_cloud_aiplatform_v1beta1_list_endpoints_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListEndpointsResponse from a dict
google_cloud_aiplatform_v1beta1_list_endpoints_response_from_dict = GoogleCloudAiplatformV1beta1ListEndpointsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_endpoints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


