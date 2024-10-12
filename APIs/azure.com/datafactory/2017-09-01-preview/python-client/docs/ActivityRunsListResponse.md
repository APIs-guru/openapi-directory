# ActivityRunsListResponse

A list activity runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[ActivityRun]**](ActivityRun.md) | List of activity runs. | 

## Example

```python
from openapi_client.models.activity_runs_list_response import ActivityRunsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityRunsListResponse from a JSON string
activity_runs_list_response_instance = ActivityRunsListResponse.from_json(json)
# print the JSON string representation of the object
print(ActivityRunsListResponse.to_json())

# convert the object into a dict
activity_runs_list_response_dict = activity_runs_list_response_instance.to_dict()
# create an instance of ActivityRunsListResponse from a dict
activity_runs_list_response_from_dict = ActivityRunsListResponse.from_dict(activity_runs_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


