# GoogleCloudAiplatformV1beta1ResourcesConsumed

Statistics information about resource consumption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replica_hours** | **float** | Output only. The number of replica hours used. Note that many replicas may run in parallel, and additionally any given work may be queued for some time. Therefore this value is not strictly related to wall time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_resources_consumed import GoogleCloudAiplatformV1beta1ResourcesConsumed

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ResourcesConsumed from a JSON string
google_cloud_aiplatform_v1beta1_resources_consumed_instance = GoogleCloudAiplatformV1beta1ResourcesConsumed.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ResourcesConsumed.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_resources_consumed_dict = google_cloud_aiplatform_v1beta1_resources_consumed_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ResourcesConsumed from a dict
google_cloud_aiplatform_v1beta1_resources_consumed_from_dict = GoogleCloudAiplatformV1beta1ResourcesConsumed.from_dict(google_cloud_aiplatform_v1beta1_resources_consumed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


