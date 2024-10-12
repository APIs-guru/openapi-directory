# StreamTargets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_targets** | [**List[IndexStreamTarget]**](IndexStreamTarget.md) |  | 

## Example

```python
from openapi_client.models.stream_targets import StreamTargets

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTargets from a JSON string
stream_targets_instance = StreamTargets.from_json(json)
# print the JSON string representation of the object
print(StreamTargets.to_json())

# convert the object into a dict
stream_targets_dict = stream_targets_instance.to_dict()
# create an instance of StreamTargets from a dict
stream_targets_from_dict = StreamTargets.from_dict(stream_targets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


