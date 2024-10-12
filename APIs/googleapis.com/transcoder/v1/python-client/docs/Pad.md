# Pad

Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom_pixels** | **int** | The number of pixels to add to the bottom. The default is 0. | [optional] 
**left_pixels** | **int** | The number of pixels to add to the left. The default is 0. | [optional] 
**right_pixels** | **int** | The number of pixels to add to the right. The default is 0. | [optional] 
**top_pixels** | **int** | The number of pixels to add to the top. The default is 0. | [optional] 

## Example

```python
from openapi_client.models.pad import Pad

# TODO update the JSON string below
json = "{}"
# create an instance of Pad from a JSON string
pad_instance = Pad.from_json(json)
# print the JSON string representation of the object
print(Pad.to_json())

# convert the object into a dict
pad_dict = pad_instance.to_dict()
# create an instance of Pad from a dict
pad_from_dict = Pad.from_dict(pad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


