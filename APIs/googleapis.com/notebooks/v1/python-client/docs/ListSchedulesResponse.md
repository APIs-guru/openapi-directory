# ListSchedulesResponse

Response for listing scheduled notebook job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Page token that can be used to continue listing from the last result in the next list call. | [optional] 
**schedules** | [**List[Schedule]**](Schedule.md) | A list of returned instances. | [optional] 
**unreachable** | **List[str]** | Schedules that could not be reached. For example: [&#39;projects/{project_id}/location/{location}/schedules/monthly_digest&#39;, &#39;projects/{project_id}/location/{location}/schedules/weekly_sentiment&#39;] | [optional] 

## Example

```python
from openapi_client.models.list_schedules_response import ListSchedulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSchedulesResponse from a JSON string
list_schedules_response_instance = ListSchedulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSchedulesResponse.to_json())

# convert the object into a dict
list_schedules_response_dict = list_schedules_response_instance.to_dict()
# create an instance of ListSchedulesResponse from a dict
list_schedules_response_from_dict = ListSchedulesResponse.from_dict(list_schedules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


