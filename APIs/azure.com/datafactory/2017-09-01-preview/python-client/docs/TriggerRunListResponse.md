# TriggerRunListResponse

A list of trigger runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[TriggerRun]**](TriggerRun.md) | List of trigger runs. | 

## Example

```python
from openapi_client.models.trigger_run_list_response import TriggerRunListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerRunListResponse from a JSON string
trigger_run_list_response_instance = TriggerRunListResponse.from_json(json)
# print the JSON string representation of the object
print(TriggerRunListResponse.to_json())

# convert the object into a dict
trigger_run_list_response_dict = trigger_run_list_response_instance.to_dict()
# create an instance of TriggerRunListResponse from a dict
trigger_run_list_response_from_dict = TriggerRunListResponse.from_dict(trigger_run_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


