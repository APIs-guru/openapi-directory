# JpgLayer

Describes the settings to produce a JPEG image from the input video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **int** | The compression quality of the JPEG output. Range is from 0-100 and the default is 70. | [optional] 

## Example

```python
from openapi_client.models.jpg_layer import JpgLayer

# TODO update the JSON string below
json = "{}"
# create an instance of JpgLayer from a JSON string
jpg_layer_instance = JpgLayer.from_json(json)
# print the JSON string representation of the object
print(JpgLayer.to_json())

# convert the object into a dict
jpg_layer_dict = jpg_layer_instance.to_dict()
# create an instance of JpgLayer from a dict
jpg_layer_from_dict = JpgLayer.from_dict(jpg_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


