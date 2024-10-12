# AnalyticsPlaceCounts200ResponsePlacesInner

The place code and the count.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The place code. | [optional] 
**count** | **int** | The count of the this place. | [optional] 
**previous_count** | **int** | The count of previous time range of the place. | [optional] 

## Example

```python
from openapi_client.models.analytics_place_counts200_response_places_inner import AnalyticsPlaceCounts200ResponsePlacesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsPlaceCounts200ResponsePlacesInner from a JSON string
analytics_place_counts200_response_places_inner_instance = AnalyticsPlaceCounts200ResponsePlacesInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsPlaceCounts200ResponsePlacesInner.to_json())

# convert the object into a dict
analytics_place_counts200_response_places_inner_dict = analytics_place_counts200_response_places_inner_instance.to_dict()
# create an instance of AnalyticsPlaceCounts200ResponsePlacesInner from a dict
analytics_place_counts200_response_places_inner_from_dict = AnalyticsPlaceCounts200ResponsePlacesInner.from_dict(analytics_place_counts200_response_places_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


