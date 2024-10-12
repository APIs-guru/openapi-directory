# AttemptStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_emitted** | **int** |  | [optional] 
**estimated_bytes** | **int** |  | [optional] 
**estimated_records** | **int** |  | [optional] 
**records_committed** | **int** |  | [optional] 
**records_emitted** | **int** |  | [optional] 
**state_messages_emitted** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.attempt_stats import AttemptStats

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptStats from a JSON string
attempt_stats_instance = AttemptStats.from_json(json)
# print the JSON string representation of the object
print(AttemptStats.to_json())

# convert the object into a dict
attempt_stats_dict = attempt_stats_instance.to_dict()
# create an instance of AttemptStats from a dict
attempt_stats_from_dict = AttemptStats.from_dict(attempt_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


