# Occlusion

Properties describing occlusions on a given face.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eye_occluded** | **bool** | A boolean value indicating whether eyes are occluded. | [optional] 
**forehead_occluded** | **bool** | A boolean value indicating whether forehead is occluded. | [optional] 
**mouth_occluded** | **bool** | A boolean value indicating whether the mouth is occluded. | [optional] 

## Example

```python
from openapi_client.models.occlusion import Occlusion

# TODO update the JSON string below
json = "{}"
# create an instance of Occlusion from a JSON string
occlusion_instance = Occlusion.from_json(json)
# print the JSON string representation of the object
print(Occlusion.to_json())

# convert the object into a dict
occlusion_dict = occlusion_instance.to_dict()
# create an instance of Occlusion from a dict
occlusion_from_dict = Occlusion.from_dict(occlusion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


