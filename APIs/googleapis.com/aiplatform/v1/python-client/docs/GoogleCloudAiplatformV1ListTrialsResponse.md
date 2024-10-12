# GoogleCloudAiplatformV1ListTrialsResponse

Response message for VizierService.ListTrials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pass this token as the &#x60;page_token&#x60; field of the request for a subsequent call. If this field is omitted, there are no subsequent pages. | [optional] 
**trials** | [**List[GoogleCloudAiplatformV1Trial]**](GoogleCloudAiplatformV1Trial.md) | The Trials associated with the Study. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_trials_response import GoogleCloudAiplatformV1ListTrialsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListTrialsResponse from a JSON string
google_cloud_aiplatform_v1_list_trials_response_instance = GoogleCloudAiplatformV1ListTrialsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListTrialsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_trials_response_dict = google_cloud_aiplatform_v1_list_trials_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListTrialsResponse from a dict
google_cloud_aiplatform_v1_list_trials_response_from_dict = GoogleCloudAiplatformV1ListTrialsResponse.from_dict(google_cloud_aiplatform_v1_list_trials_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


