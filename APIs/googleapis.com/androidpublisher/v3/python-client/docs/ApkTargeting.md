# ApkTargeting

Represents a set of apk-level targetings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abi_targeting** | [**AbiTargeting**](AbiTargeting.md) |  | [optional] 
**language_targeting** | [**LanguageTargeting**](LanguageTargeting.md) |  | [optional] 
**multi_abi_targeting** | [**MultiAbiTargeting**](MultiAbiTargeting.md) |  | [optional] 
**screen_density_targeting** | [**ScreenDensityTargeting**](ScreenDensityTargeting.md) |  | [optional] 
**sdk_version_targeting** | [**SdkVersionTargeting**](SdkVersionTargeting.md) |  | [optional] 
**texture_compression_format_targeting** | [**TextureCompressionFormatTargeting**](TextureCompressionFormatTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.apk_targeting import ApkTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of ApkTargeting from a JSON string
apk_targeting_instance = ApkTargeting.from_json(json)
# print the JSON string representation of the object
print(ApkTargeting.to_json())

# convert the object into a dict
apk_targeting_dict = apk_targeting_instance.to_dict()
# create an instance of ApkTargeting from a dict
apk_targeting_from_dict = ApkTargeting.from_dict(apk_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


