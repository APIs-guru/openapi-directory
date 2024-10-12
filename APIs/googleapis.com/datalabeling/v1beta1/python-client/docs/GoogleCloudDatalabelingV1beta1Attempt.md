# GoogleCloudDatalabelingV1beta1Attempt

Records a failed evaluation job run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_time** | **str** |  | [optional] 
**partial_failures** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Details of errors that occurred. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_attempt import GoogleCloudDatalabelingV1beta1Attempt

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Attempt from a JSON string
google_cloud_datalabeling_v1beta1_attempt_instance = GoogleCloudDatalabelingV1beta1Attempt.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Attempt.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_attempt_dict = google_cloud_datalabeling_v1beta1_attempt_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Attempt from a dict
google_cloud_datalabeling_v1beta1_attempt_from_dict = GoogleCloudDatalabelingV1beta1Attempt.from_dict(google_cloud_datalabeling_v1beta1_attempt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


