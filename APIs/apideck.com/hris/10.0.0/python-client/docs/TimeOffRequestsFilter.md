# TimeOffRequestsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employee_id** | **str** | Employee ID | [optional] 
**end_date** | **str** | End date | [optional] 
**start_date** | **str** | Start date | [optional] 
**time_off_request_status** | **str** | Time off request status to filter on | [optional] 

## Example

```python
from openapi_client.models.time_off_requests_filter import TimeOffRequestsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of TimeOffRequestsFilter from a JSON string
time_off_requests_filter_instance = TimeOffRequestsFilter.from_json(json)
# print the JSON string representation of the object
print(TimeOffRequestsFilter.to_json())

# convert the object into a dict
time_off_requests_filter_dict = time_off_requests_filter_instance.to_dict()
# create an instance of TimeOffRequestsFilter from a dict
time_off_requests_filter_from_dict = TimeOffRequestsFilter.from_dict(time_off_requests_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


