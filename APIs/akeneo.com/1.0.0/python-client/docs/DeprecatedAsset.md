# DeprecatedAsset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | Codes of the PAM asset categories in which the asset is classified | [optional] 
**code** | **str** | PAM asset code | 
**description** | **str** | Description of the PAM asset | [optional] 
**end_of_use** | **str** | Date on which the PAM asset expire | [optional] 
**localizable** | **bool** | Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale | [optional] [default to False]
**reference_files** | [**List[PAMAssetsAllOfEmbeddedItemsInnerAllOfReferenceFilesInner]**](PAMAssetsAllOfEmbeddedItemsInnerAllOfReferenceFilesInner.md) | Reference files of the PAM asset | [optional] 
**tags** | **List[str]** | Tags of the PAM asset | [optional] 
**variation_files** | [**List[PAMAssetsAllOfEmbeddedItemsInnerAllOfVariationFilesInner]**](PAMAssetsAllOfEmbeddedItemsInnerAllOfVariationFilesInner.md) | Variations of the PAM asset | [optional] 

## Example

```python
from openapi_client.models.deprecated_asset import DeprecatedAsset

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecatedAsset from a JSON string
deprecated_asset_instance = DeprecatedAsset.from_json(json)
# print the JSON string representation of the object
print(DeprecatedAsset.to_json())

# convert the object into a dict
deprecated_asset_dict = deprecated_asset_instance.to_dict()
# create an instance of DeprecatedAsset from a dict
deprecated_asset_from_dict = DeprecatedAsset.from_dict(deprecated_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


