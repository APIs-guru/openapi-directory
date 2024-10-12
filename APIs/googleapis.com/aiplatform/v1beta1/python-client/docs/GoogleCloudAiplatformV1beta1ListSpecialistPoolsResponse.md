# GoogleCloudAiplatformV1beta1ListSpecialistPoolsResponse

Response message for SpecialistPoolService.ListSpecialistPools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The standard List next-page token. | [optional] 
**specialist_pools** | [**List[GoogleCloudAiplatformV1beta1SpecialistPool]**](GoogleCloudAiplatformV1beta1SpecialistPool.md) | A list of SpecialistPools that matches the specified filter in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_specialist_pools_response import GoogleCloudAiplatformV1beta1ListSpecialistPoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListSpecialistPoolsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_specialist_pools_response_instance = GoogleCloudAiplatformV1beta1ListSpecialistPoolsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListSpecialistPoolsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_specialist_pools_response_dict = google_cloud_aiplatform_v1beta1_list_specialist_pools_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListSpecialistPoolsResponse from a dict
google_cloud_aiplatform_v1beta1_list_specialist_pools_response_from_dict = GoogleCloudAiplatformV1beta1ListSpecialistPoolsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_specialist_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


