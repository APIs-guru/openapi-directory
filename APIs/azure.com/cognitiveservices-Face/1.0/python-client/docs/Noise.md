# Noise

Properties describing noise level of the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**noise_level** | **str** | An enum value indicating level of noise. | [optional] 
**value** | **float** | A number ranging from 0 to 1 indicating the intensity level associated with a property. | [optional] 

## Example

```python
from openapi_client.models.noise import Noise

# TODO update the JSON string below
json = "{}"
# create an instance of Noise from a JSON string
noise_instance = Noise.from_json(json)
# print the JSON string representation of the object
print(Noise.to_json())

# convert the object into a dict
noise_dict = noise_instance.to_dict()
# create an instance of Noise from a dict
noise_from_dict = Noise.from_dict(noise_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


