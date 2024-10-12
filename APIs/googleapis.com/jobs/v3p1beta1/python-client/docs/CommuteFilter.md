# CommuteFilter

Input only. Parameters needed for commute search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_imprecise_addresses** | **bool** | Optional. If true, jobs without \&quot;precise\&quot; addresses (street level addresses or GPS coordinates) might also be returned. For city and coarser level addresses, text matching is used. If this field is set to false or is not specified, only jobs that include precise addresses are returned by Commute Search. Note: If &#x60;allow_imprecise_addresses&#x60; is set to true, Commute Search is not able to calculate accurate commute times to jobs with city level and coarser address information. Jobs with imprecise addresses will return a &#x60;travel_duration&#x60; time of 0 regardless of distance from the job seeker. | [optional] 
**commute_method** | **str** | Required. The method of transportation for which to calculate the commute time. | [optional] 
**departure_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**road_traffic** | **str** | Optional. Specifies the traffic density to use when calculating commute time. | [optional] 
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


