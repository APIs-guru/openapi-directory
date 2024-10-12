# AttemptRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_synced** | **int** |  | [optional] 
**created_at** | **int** |  | 
**ended_at** | **int** |  | [optional] 
**failure_summary** | [**AttemptFailureSummary**](AttemptFailureSummary.md) |  | [optional] 
**id** | **int** |  | 
**records_synced** | **int** |  | [optional] 
**status** | [**AttemptStatus**](AttemptStatus.md) |  | 
**stream_stats** | [**List[AttemptStreamStats]**](AttemptStreamStats.md) |  | [optional] 
**total_stats** | [**AttemptStats**](AttemptStats.md) |  | [optional] 
**updated_at** | **int** |  | 

## Example

```python
from openapi_client.models.attempt_read import AttemptRead

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptRead from a JSON string
attempt_read_instance = AttemptRead.from_json(json)
# print the JSON string representation of the object
print(AttemptRead.to_json())

# convert the object into a dict
attempt_read_dict = attempt_read_instance.to_dict()
# create an instance of AttemptRead from a dict
attempt_read_from_dict = AttemptRead.from_dict(attempt_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


