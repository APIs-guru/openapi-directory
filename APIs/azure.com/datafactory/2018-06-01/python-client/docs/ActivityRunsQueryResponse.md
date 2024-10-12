# ActivityRunsQueryResponse

A list activity runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for getting the next page of results, if any remaining results exist, null otherwise. | [optional] 
**value** | [**List[ActivityRun]**](ActivityRun.md) | List of activity runs. | 

## Example

```python
from openapi_client.models.activity_runs_query_response import ActivityRunsQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityRunsQueryResponse from a JSON string
activity_runs_query_response_instance = ActivityRunsQueryResponse.from_json(json)
# print the JSON string representation of the object
print(ActivityRunsQueryResponse.to_json())

# convert the object into a dict
activity_runs_query_response_dict = activity_runs_query_response_instance.to_dict()
# create an instance of ActivityRunsQueryResponse from a dict
activity_runs_query_response_from_dict = ActivityRunsQueryResponse.from_dict(activity_runs_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


