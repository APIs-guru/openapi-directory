# Fmp4Config

`fmp4` container configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codec_tag** | **str** | Optional. Specify the codec tag string that will be used in the media bitstream. When not specified, the codec appropriate value is used. Supported H265 codec tags: - &#x60;hvc1&#x60; (default) - &#x60;hev1&#x60; | [optional] 

## Example

```python
from openapi_client.models.fmp4_config import Fmp4Config

# TODO update the JSON string below
json = "{}"
# create an instance of Fmp4Config from a JSON string
fmp4_config_instance = Fmp4Config.from_json(json)
# print the JSON string representation of the object
print(Fmp4Config.to_json())

# convert the object into a dict
fmp4_config_dict = fmp4_config_instance.to_dict()
# create an instance of Fmp4Config from a dict
fmp4_config_from_dict = Fmp4Config.from_dict(fmp4_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


