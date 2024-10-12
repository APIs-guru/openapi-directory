# CommuteFilter

Parameters needed for commute search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_imprecise_addresses** | **bool** | If &#x60;true&#x60;, jobs without street level addresses may also be returned. For city level addresses, the city center is used. For state and coarser level addresses, text matching is used. If this field is set to &#x60;false&#x60; or isn&#39;t specified, only jobs that include street level addresses will be returned by commute search. | [optional] 
**commute_method** | **str** | Required. The method of transportation to calculate the commute time for. | [optional] 
**departure_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**road_traffic** | **str** | Specifies the traffic density to use when calculating commute time. | [optional] 
**start_coordinates** | [**LatLng**](LatLng.md) |  | [optional] 
**travel_duration** | **str** | Required. The maximum travel time in seconds. The maximum allowed value is &#x60;3600s&#x60; (one hour). Format is &#x60;123s&#x60;. | [optional] 

## Example

```python
from openapi_client.models.commute_filter import CommuteFilter

# TODO update the JSON string below
json = "{}"
# create an instance of CommuteFilter from a JSON string
commute_filter_instance = CommuteFilter.from_json(json)
# print the JSON string representation of the object
print(CommuteFilter.to_json())

# convert the object into a dict
commute_filter_dict = commute_filter_instance.to_dict()
# create an instance of CommuteFilter from a dict
commute_filter_from_dict = CommuteFilter.from_dict(commute_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


