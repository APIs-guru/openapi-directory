# Frames

Collection of frame data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frames_data** | [**List[AssetFrame]**](AssetFrame.md) | A repeated field of asset data. | [optional] 

## Example

```python
from openapi_client.models.frames import Frames

# TODO update the JSON string below
json = "{}"
# create an instance of Frames from a JSON string
frames_instance = Frames.from_json(json)
# print the JSON string representation of the object
print(Frames.to_json())

# convert the object into a dict
frames_dict = frames_instance.to_dict()
# create an instance of Frames from a dict
frames_from_dict = Frames.from_dict(frames_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


