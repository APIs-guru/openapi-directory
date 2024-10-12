# DeprecatedAssetVariationFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | [**GetVariationFilesChannelCodeLocaleCode200ResponseLink**](GetVariationFilesChannelCodeLocaleCode200ResponseLink.md) |  | [optional] 
**code** | **str** | Code of the PAM asset variation file | [optional] 
**locale** | **str** | Locale of the PAM asset variation file, equal to &#x60;null&#x60; if the asset is not localizable | [optional] 
**scope** | **str** | Channel of the PAM asset variation file | [optional] 

## Example

```python
from openapi_client.models.deprecated_asset_variation_file import DeprecatedAssetVariationFile

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecatedAssetVariationFile from a JSON string
deprecated_asset_variation_file_instance = DeprecatedAssetVariationFile.from_json(json)
# print the JSON string representation of the object
print(DeprecatedAssetVariationFile.to_json())

# convert the object into a dict
deprecated_asset_variation_file_dict = deprecated_asset_variation_file_instance.to_dict()
# create an instance of DeprecatedAssetVariationFile from a dict
deprecated_asset_variation_file_from_dict = DeprecatedAssetVariationFile.from_dict(deprecated_asset_variation_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


