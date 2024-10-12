# LocationDrivingDirectionMetrics

A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_name** | **str** | The location resource name this metric value belongs to. | [optional] 
**time_zone** | **str** | Time zone (IANA timezone IDs, for example, &#39;Europe/London&#39;) of the location. | [optional] 
**top_direction_sources** | [**List[TopDirectionSources]**](TopDirectionSources.md) | Driving-direction requests by source region. By convention, these are sorted by count with at most 10 results. | [optional] 

## Example

```python
from openapi_client.models.location_driving_direction_metrics import LocationDrivingDirectionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of LocationDrivingDirectionMetrics from a JSON string
location_driving_direction_metrics_instance = LocationDrivingDirectionMetrics.from_json(json)
# print the JSON string representation of the object
print(LocationDrivingDirectionMetrics.to_json())

# convert the object into a dict
location_driving_direction_metrics_dict = location_driving_direction_metrics_instance.to_dict()
# create an instance of LocationDrivingDirectionMetrics from a dict
location_driving_direction_metrics_from_dict = LocationDrivingDirectionMetrics.from_dict(location_driving_direction_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


