# GoogleCloudAiplatformV1ListIndexEndpointsResponse

Response message for IndexEndpointService.ListIndexEndpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index_endpoints** | [**List[GoogleCloudAiplatformV1IndexEndpoint]**](GoogleCloudAiplatformV1IndexEndpoint.md) | List of IndexEndpoints in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListIndexEndpointsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_index_endpoints_response import GoogleCloudAiplatformV1ListIndexEndpointsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListIndexEndpointsResponse from a JSON string
google_cloud_aiplatform_v1_list_index_endpoints_response_instance = GoogleCloudAiplatformV1ListIndexEndpointsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListIndexEndpointsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_index_endpoints_response_dict = google_cloud_aiplatform_v1_list_index_endpoints_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListIndexEndpointsResponse from a dict
google_cloud_aiplatform_v1_list_index_endpoints_response_from_dict = GoogleCloudAiplatformV1ListIndexEndpointsResponse.from_dict(google_cloud_aiplatform_v1_list_index_endpoints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


