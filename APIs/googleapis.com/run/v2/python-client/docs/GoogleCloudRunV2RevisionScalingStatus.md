# GoogleCloudRunV2RevisionScalingStatus

Effective settings for the current revision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desired_min_instance_count** | **int** | The current number of min instances provisioned for this revision. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_revision_scaling_status import GoogleCloudRunV2RevisionScalingStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2RevisionScalingStatus from a JSON string
google_cloud_run_v2_revision_scaling_status_instance = GoogleCloudRunV2RevisionScalingStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2RevisionScalingStatus.to_json())

# convert the object into a dict
google_cloud_run_v2_revision_scaling_status_dict = google_cloud_run_v2_revision_scaling_status_instance.to_dict()
# create an instance of GoogleCloudRunV2RevisionScalingStatus from a dict
google_cloud_run_v2_revision_scaling_status_from_dict = GoogleCloudRunV2RevisionScalingStatus.from_dict(google_cloud_run_v2_revision_scaling_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


