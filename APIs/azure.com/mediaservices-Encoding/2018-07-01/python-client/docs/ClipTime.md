# ClipTime

Base class for specifying a clip time. Use sub classes of this class to specify the time position in the media.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 

## Example

```python
from openapi_client.models.clip_time import ClipTime

# TODO update the JSON string below
json = "{}"
# create an instance of ClipTime from a JSON string
clip_time_instance = ClipTime.from_json(json)
# print the JSON string representation of the object
print(ClipTime.to_json())

# convert the object into a dict
clip_time_dict = clip_time_instance.to_dict()
# create an instance of ClipTime from a dict
clip_time_from_dict = ClipTime.from_dict(clip_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


