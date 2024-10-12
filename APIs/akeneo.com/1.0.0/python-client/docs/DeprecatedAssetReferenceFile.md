# DeprecatedAssetReferenceFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | [**GetReferenceFilesLocaleCode200ResponseLink**](GetReferenceFilesLocaleCode200ResponseLink.md) |  | [optional] 
**code** | **str** | Code of the PAM asset reference file | [optional] 
**locale** | **str** | Locale of the PAM asset reference file, equal to &#x60;null&#x60; if the asset is not localizable | [optional] 

## Example

```python
from openapi_client.models.deprecated_asset_reference_file import DeprecatedAssetReferenceFile

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecatedAssetReferenceFile from a JSON string
deprecated_asset_reference_file_instance = DeprecatedAssetReferenceFile.from_json(json)
# print the JSON string representation of the object
print(DeprecatedAssetReferenceFile.to_json())

# convert the object into a dict
deprecated_asset_reference_file_dict = deprecated_asset_reference_file_instance.to_dict()
# create an instance of DeprecatedAssetReferenceFile from a dict
deprecated_asset_reference_file_from_dict = DeprecatedAssetReferenceFile.from_dict(deprecated_asset_reference_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


