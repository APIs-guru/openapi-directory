# VariantTargeting

Targeting on the level of variants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abi_targeting** | [**AbiTargeting**](AbiTargeting.md) |  | [optional] 
**multi_abi_targeting** | [**MultiAbiTargeting**](MultiAbiTargeting.md) |  | [optional] 
**screen_density_targeting** | [**ScreenDensityTargeting**](ScreenDensityTargeting.md) |  | [optional] 
**sdk_version_targeting** | [**SdkVersionTargeting**](SdkVersionTargeting.md) |  | [optional] 
**texture_compression_format_targeting** | [**TextureCompressionFormatTargeting**](TextureCompressionFormatTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.variant_targeting import VariantTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of VariantTargeting from a JSON string
variant_targeting_instance = VariantTargeting.from_json(json)
# print the JSON string representation of the object
print(VariantTargeting.to_json())

# convert the object into a dict
variant_targeting_dict = variant_targeting_instance.to_dict()
# create an instance of VariantTargeting from a dict
variant_targeting_from_dict = VariantTargeting.from_dict(variant_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


