# ReplayOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**status** | [**BackgroundTaskStatus**](BackgroundTaskStatus.md) |  | 
**task** | **str** |  | [optional] [default to 'endpoint.replay']

## Example

```python
from openapi_client.models.replay_out import ReplayOut

# TODO update the JSON string below
json = "{}"
# create an instance of ReplayOut from a JSON string
replay_out_instance = ReplayOut.from_json(json)
# print the JSON string representation of the object
print(ReplayOut.to_json())

# convert the object into a dict
replay_out_dict = replay_out_instance.to_dict()
# create an instance of ReplayOut from a dict
replay_out_from_dict = ReplayOut.from_dict(replay_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


