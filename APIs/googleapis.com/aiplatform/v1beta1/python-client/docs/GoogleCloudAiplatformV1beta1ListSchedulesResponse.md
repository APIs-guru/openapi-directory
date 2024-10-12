# GoogleCloudAiplatformV1beta1ListSchedulesResponse

Response message for ScheduleService.ListSchedules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListSchedulesRequest.page_token to obtain that page. | [optional] 
**schedules** | [**List[GoogleCloudAiplatformV1beta1Schedule]**](GoogleCloudAiplatformV1beta1Schedule.md) | List of Schedules in the requested page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_schedules_response import GoogleCloudAiplatformV1beta1ListSchedulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListSchedulesResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_schedules_response_instance = GoogleCloudAiplatformV1beta1ListSchedulesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListSchedulesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_schedules_response_dict = google_cloud_aiplatform_v1beta1_list_schedules_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListSchedulesResponse from a dict
google_cloud_aiplatform_v1beta1_list_schedules_response_from_dict = GoogleCloudAiplatformV1beta1ListSchedulesResponse.from_dict(google_cloud_aiplatform_v1beta1_list_schedules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


