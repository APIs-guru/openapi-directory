# FsLayer

Image layer information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_sum** | **str** | SHA of an image layer | [optional] 

## Example

```python
from openapi_client.models.fs_layer import FsLayer

# TODO update the JSON string below
json = "{}"
# create an instance of FsLayer from a JSON string
fs_layer_instance = FsLayer.from_json(json)
# print the JSON string representation of the object
print(FsLayer.to_json())

# convert the object into a dict
fs_layer_dict = fs_layer_instance.to_dict()
# create an instance of FsLayer from a dict
fs_layer_from_dict = FsLayer.from_dict(fs_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


