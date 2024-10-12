# GoogleCloudRunV2ServiceScaling

Scaling settings applied at the service level rather than at the revision level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_instance_count** | **int** | total min instances for the service. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving. (ALPHA) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_service_scaling import GoogleCloudRunV2ServiceScaling

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ServiceScaling from a JSON string
google_cloud_run_v2_service_scaling_instance = GoogleCloudRunV2ServiceScaling.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ServiceScaling.to_json())

# convert the object into a dict
google_cloud_run_v2_service_scaling_dict = google_cloud_run_v2_service_scaling_instance.to_dict()
# create an instance of GoogleCloudRunV2ServiceScaling from a dict
google_cloud_run_v2_service_scaling_from_dict = GoogleCloudRunV2ServiceScaling.from_dict(google_cloud_run_v2_service_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


