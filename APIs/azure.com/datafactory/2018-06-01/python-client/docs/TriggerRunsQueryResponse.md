# TriggerRunsQueryResponse

A list of trigger runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for getting the next page of results, if any remaining results exist, null otherwise. | [optional] 
**value** | [**List[TriggerRun]**](TriggerRun.md) | List of trigger runs. | 

## Example

```python
from openapi_client.models.trigger_runs_query_response import TriggerRunsQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerRunsQueryResponse from a JSON string
trigger_runs_query_response_instance = TriggerRunsQueryResponse.from_json(json)
# print the JSON string representation of the object
print(TriggerRunsQueryResponse.to_json())

# convert the object into a dict
trigger_runs_query_response_dict = trigger_runs_query_response_instance.to_dict()
# create an instance of TriggerRunsQueryResponse from a dict
trigger_runs_query_response_from_dict = TriggerRunsQueryResponse.from_dict(trigger_runs_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


