# AttemptStreamStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**AttemptStats**](AttemptStats.md) |  | 
**stream_name** | **str** |  | 
**stream_namespace** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attempt_stream_stats import AttemptStreamStats

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptStreamStats from a JSON string
attempt_stream_stats_instance = AttemptStreamStats.from_json(json)
# print the JSON string representation of the object
print(AttemptStreamStats.to_json())

# convert the object into a dict
attempt_stream_stats_dict = attempt_stream_stats_instance.to_dict()
# create an instance of AttemptStreamStats from a dict
attempt_stream_stats_from_dict = AttemptStreamStats.from_dict(attempt_stream_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


