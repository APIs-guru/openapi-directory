# GeneratedAssetPackSlice

Download metadata for an asset pack slice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_id** | **str** | Download ID, which uniquely identifies the APK to download. Should be supplied to &#x60;generatedapks.download&#x60; method. | [optional] 
**module_name** | **str** | Name of the module that this asset slice belongs to. | [optional] 
**slice_id** | **str** | Asset slice ID. | [optional] 
**version** | **str** | Asset module version. | [optional] 

## Example

```python
from openapi_client.models.generated_asset_pack_slice import GeneratedAssetPackSlice

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratedAssetPackSlice from a JSON string
generated_asset_pack_slice_instance = GeneratedAssetPackSlice.from_json(json)
# print the JSON string representation of the object
print(GeneratedAssetPackSlice.to_json())

# convert the object into a dict
generated_asset_pack_slice_dict = generated_asset_pack_slice_instance.to_dict()
# create an instance of GeneratedAssetPackSlice from a dict
generated_asset_pack_slice_from_dict = GeneratedAssetPackSlice.from_dict(generated_asset_pack_slice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


