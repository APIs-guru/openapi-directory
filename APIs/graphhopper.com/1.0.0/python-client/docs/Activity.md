# Activity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ResponseAddress**](ResponseAddress.md) |  | [optional] 
**arr_date_time** | **datetime** | Arrival date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is &#x60;null&#x60;. | [optional] 
**arr_time** | **int** | Arrival time at this activity in seconds. If type is &#x60;start&#x60;, this is not available (since it makes no sense to have &#x60;arr_time&#x60; at start). However, &#x60;end_time&#x60; is available and actually means \\\&quot;departure time\\\&quot; at start location. It is important to note that &#x60;arr_time&#x60; does not necessarily mean \\\&quot;start of underlying activity\\\&quot;, it solely means arrival time at activity location. If this activity has no time windows and if there are no further preparation times, &#x60;arr_time&#x60; is equal to activity start time. | [optional] 
**distance** | **int** | cumulated distance from start to this activity in m | [optional] 
**driving_time** | **int** | cumulated driving time from start to this driver activity in seconds | [optional] 
**end_date_time** | **datetime** | End date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is &#x60;null&#x60;. | [optional] 
**end_time** | **int** | End time of and thus departure time at this activity. If type is &#x60;end&#x60;, this is not available (since it makes no sense to have an &#x60;end_time&#x60; at end) &#x60;end_time&#x60; at each activity is equal to the departure time at the activity location. | [optional] 
**id** | **str** | Id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to | [optional] 
**load_after** | **List[int]** | Array with size/capacity dimensions after this activity | [optional] 
**load_before** | **List[int]** | Array with size/capacity dimensions before this activity | [optional] 
**location_id** | **str** | Id that refers to address | [optional] 
**preparation_time** | **int** | preparation time at this activity in seconds | [optional] 
**type** | **str** | type of activity | [optional] 
**waiting_time** | **int** | Waiting time at this activity in seconds. A waiting time can occur if the activity has at least one time window. If &#x60;arr_time&#x60; &lt; &#x60;time_window.earliest&#x60; a waiting time of &#x60;time_window_earliest&#x60; - &#x60;arr_time&#x60; occurs. | [optional] 

## Example

```python
from openapi_client.models.activity import Activity

# TODO update the JSON string below
json = "{}"
# create an instance of Activity from a JSON string
activity_instance = Activity.from_json(json)
# print the JSON string representation of the object
print(Activity.to_json())

# convert the object into a dict
activity_dict = activity_instance.to_dict()
# create an instance of Activity from a dict
activity_from_dict = Activity.from_dict(activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


