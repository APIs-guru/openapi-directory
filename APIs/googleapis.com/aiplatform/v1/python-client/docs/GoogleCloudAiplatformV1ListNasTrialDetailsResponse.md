# GoogleCloudAiplatformV1ListNasTrialDetailsResponse

Response message for JobService.ListNasTrialDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nas_trial_details** | [**List[GoogleCloudAiplatformV1NasTrialDetail]**](GoogleCloudAiplatformV1NasTrialDetail.md) | List of top NasTrials in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListNasTrialDetailsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_nas_trial_details_response import GoogleCloudAiplatformV1ListNasTrialDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListNasTrialDetailsResponse from a JSON string
google_cloud_aiplatform_v1_list_nas_trial_details_response_instance = GoogleCloudAiplatformV1ListNasTrialDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListNasTrialDetailsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_nas_trial_details_response_dict = google_cloud_aiplatform_v1_list_nas_trial_details_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListNasTrialDetailsResponse from a dict
google_cloud_aiplatform_v1_list_nas_trial_details_response_from_dict = GoogleCloudAiplatformV1ListNasTrialDetailsResponse.from_dict(google_cloud_aiplatform_v1_list_nas_trial_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


