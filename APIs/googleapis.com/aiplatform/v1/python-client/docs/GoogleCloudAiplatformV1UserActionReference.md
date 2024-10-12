# GoogleCloudAiplatformV1UserActionReference

References an API call. It contains more information about long running operation and Jobs that are triggered by the API call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_labeling_job** | **str** | For API calls that start a LabelingJob. Resource name of the LabelingJob. Format: &#x60;projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}&#x60; | [optional] 
**method** | **str** | The method name of the API RPC call. For example, \&quot;/google.cloud.aiplatform.{apiVersion}.DatasetService.CreateDataset\&quot; | [optional] 
**operation** | **str** | For API calls that return a long running operation. Resource name of the long running operation. Format: &#x60;projects/{project}/locations/{location}/operations/{operation}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_user_action_reference import GoogleCloudAiplatformV1UserActionReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1UserActionReference from a JSON string
google_cloud_aiplatform_v1_user_action_reference_instance = GoogleCloudAiplatformV1UserActionReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1UserActionReference.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_user_action_reference_dict = google_cloud_aiplatform_v1_user_action_reference_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1UserActionReference from a dict
google_cloud_aiplatform_v1_user_action_reference_from_dict = GoogleCloudAiplatformV1UserActionReference.from_dict(google_cloud_aiplatform_v1_user_action_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


