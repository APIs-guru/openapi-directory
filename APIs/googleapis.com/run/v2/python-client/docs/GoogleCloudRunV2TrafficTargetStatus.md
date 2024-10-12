# GoogleCloudRunV2TrafficTargetStatus

Represents the observed state of a single `TrafficTarget` entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percent** | **int** | Specifies percent of the traffic to this Revision. | [optional] 
**revision** | **str** | Revision to which this traffic is sent. | [optional] 
**tag** | **str** | Indicates the string used in the URI to exclusively reference this target. | [optional] 
**type** | **str** | The allocation type for this traffic target. | [optional] 
**uri** | **str** | Displays the target URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_traffic_target_status import GoogleCloudRunV2TrafficTargetStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2TrafficTargetStatus from a JSON string
google_cloud_run_v2_traffic_target_status_instance = GoogleCloudRunV2TrafficTargetStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2TrafficTargetStatus.to_json())

# convert the object into a dict
google_cloud_run_v2_traffic_target_status_dict = google_cloud_run_v2_traffic_target_status_instance.to_dict()
# create an instance of GoogleCloudRunV2TrafficTargetStatus from a dict
google_cloud_run_v2_traffic_target_status_from_dict = GoogleCloudRunV2TrafficTargetStatus.from_dict(google_cloud_run_v2_traffic_target_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


