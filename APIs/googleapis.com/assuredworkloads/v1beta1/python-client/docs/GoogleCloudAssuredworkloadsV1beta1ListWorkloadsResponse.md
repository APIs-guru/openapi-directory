# GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse

Response of ListWorkloads endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next page token. Return empty if reached the last page. | [optional] 
**workloads** | [**List[GoogleCloudAssuredworkloadsV1beta1Workload]**](GoogleCloudAssuredworkloadsV1beta1Workload.md) | List of Workloads under a given parent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_list_workloads_response import GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse from a JSON string
google_cloud_assuredworkloads_v1beta1_list_workloads_response_instance = GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_list_workloads_response_dict = google_cloud_assuredworkloads_v1beta1_list_workloads_response_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse from a dict
google_cloud_assuredworkloads_v1beta1_list_workloads_response_from_dict = GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse.from_dict(google_cloud_assuredworkloads_v1beta1_list_workloads_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


