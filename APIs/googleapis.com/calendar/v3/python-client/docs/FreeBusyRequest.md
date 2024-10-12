# FreeBusyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendar_expansion_max** | **int** | Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50. | [optional] 
**group_expansion_max** | **int** | Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100. | [optional] 
**items** | [**List[FreeBusyRequestItem]**](FreeBusyRequestItem.md) | List of calendars and/or groups to query. | [optional] 
**time_max** | **datetime** | The end of the interval for the query formatted as per RFC3339. | [optional] 
**time_min** | **datetime** | The start of the interval for the query formatted as per RFC3339. | [optional] 
**time_zone** | **str** | Time zone used in the response. Optional. The default is UTC. | [optional] [default to 'UTC']

## Example

```python
from openapi_client.models.free_busy_request import FreeBusyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FreeBusyRequest from a JSON string
free_busy_request_instance = FreeBusyRequest.from_json(json)
# print the JSON string representation of the object
print(FreeBusyRequest.to_json())

# convert the object into a dict
free_busy_request_dict = free_busy_request_instance.to_dict()
# create an instance of FreeBusyRequest from a dict
free_busy_request_from_dict = FreeBusyRequest.from_dict(free_busy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


