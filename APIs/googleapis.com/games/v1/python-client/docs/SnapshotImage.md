# SnapshotImage

An image of a snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the image. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#snapshotImage&#x60;. | [optional] 
**mime_type** | **str** | The MIME type of the image. | [optional] 
**url** | **str** | The URL of the image. This URL may be invalidated at any time and should not be cached. | [optional] 
**width** | **int** | The width of the image. | [optional] 

## Example

```python
from openapi_client.models.snapshot_image import SnapshotImage

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotImage from a JSON string
snapshot_image_instance = SnapshotImage.from_json(json)
# print the JSON string representation of the object
print(SnapshotImage.to_json())

# convert the object into a dict
snapshot_image_dict = snapshot_image_instance.to_dict()
# create an instance of SnapshotImage from a dict
snapshot_image_from_dict = SnapshotImage.from_dict(snapshot_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


