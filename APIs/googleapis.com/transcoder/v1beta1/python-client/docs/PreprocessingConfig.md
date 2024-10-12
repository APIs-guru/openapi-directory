# PreprocessingConfig

Preprocessing configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | [**Audio**](Audio.md) |  | [optional] 
**color** | [**Color**](Color.md) |  | [optional] 
**crop** | [**Crop**](Crop.md) |  | [optional] 
**deblock** | [**Deblock**](Deblock.md) |  | [optional] 
**denoise** | [**Denoise**](Denoise.md) |  | [optional] 
**pad** | [**Pad**](Pad.md) |  | [optional] 

## Example

```python
from openapi_client.models.preprocessing_config import PreprocessingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PreprocessingConfig from a JSON string
preprocessing_config_instance = PreprocessingConfig.from_json(json)
# print the JSON string representation of the object
print(PreprocessingConfig.to_json())

# convert the object into a dict
preprocessing_config_dict = preprocessing_config_instance.to_dict()
# create an instance of PreprocessingConfig from a dict
preprocessing_config_from_dict = PreprocessingConfig.from_dict(preprocessing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


