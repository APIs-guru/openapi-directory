# Denoise

Denoise preprocessing configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strength** | **float** | Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0. | [optional] 
**tune** | **str** | Set the denoiser mode. The default is &#x60;\&quot;standard\&quot;&#x60;. Supported denoiser modes: - &#39;standard&#39; - &#39;grain&#39; | [optional] 

## Example

```python
from openapi_client.models.denoise import Denoise

# TODO update the JSON string below
json = "{}"
# create an instance of Denoise from a JSON string
denoise_instance = Denoise.from_json(json)
# print the JSON string representation of the object
print(Denoise.to_json())

# convert the object into a dict
denoise_dict = denoise_instance.to_dict()
# create an instance of Denoise from a dict
denoise_from_dict = Denoise.from_dict(denoise_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


