# GoogleCloudRunV2TrafficTarget

Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percent** | **int** | Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. | [optional] 
**revision** | **str** | Revision to which to send this portion of traffic, if traffic allocation is by revision. | [optional] 
**tag** | **str** | Indicates a string to be part of the URI to exclusively reference this target. | [optional] 
**type** | **str** | The allocation type for this traffic target. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_traffic_target import GoogleCloudRunV2TrafficTarget

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2TrafficTarget from a JSON string
google_cloud_run_v2_traffic_target_instance = GoogleCloudRunV2TrafficTarget.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2TrafficTarget.to_json())

# convert the object into a dict
google_cloud_run_v2_traffic_target_dict = google_cloud_run_v2_traffic_target_instance.to_dict()
# create an instance of GoogleCloudRunV2TrafficTarget from a dict
google_cloud_run_v2_traffic_target_from_dict = GoogleCloudRunV2TrafficTarget.from_dict(google_cloud_run_v2_traffic_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


