# GoogleCloudRunV2RevisionScaling

Settings for revision-level scaling settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_instance_count** | **int** | Maximum number of serving instances that this resource should have. | [optional] 
**min_instance_count** | **int** | Minimum number of serving instances that this resource should have. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_revision_scaling import GoogleCloudRunV2RevisionScaling

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2RevisionScaling from a JSON string
google_cloud_run_v2_revision_scaling_instance = GoogleCloudRunV2RevisionScaling.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2RevisionScaling.to_json())

# convert the object into a dict
google_cloud_run_v2_revision_scaling_dict = google_cloud_run_v2_revision_scaling_instance.to_dict()
# create an instance of GoogleCloudRunV2RevisionScaling from a dict
google_cloud_run_v2_revision_scaling_from_dict = GoogleCloudRunV2RevisionScaling.from_dict(google_cloud_run_v2_revision_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


