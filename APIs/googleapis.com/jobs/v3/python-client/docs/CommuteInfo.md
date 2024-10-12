# CommuteInfo

Output only. Commute details related to this job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_location** | [**Location**](Location.md) |  | [optional] 
**travel_duration** | **str** | The number of seconds required to travel to the job location from the query location. A duration of 0 seconds indicates that the job is not reachable within the requested duration, but was returned as part of an expanded query. | [optional] 

## Example

```python
from openapi_client.models.commute_info import CommuteInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CommuteInfo from a JSON string
commute_info_instance = CommuteInfo.from_json(json)
# print the JSON string representation of the object
print(CommuteInfo.to_json())

# convert the object into a dict
commute_info_dict = commute_info_instance.to_dict()
# create an instance of CommuteInfo from a dict
commute_info_from_dict = CommuteInfo.from_dict(commute_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


