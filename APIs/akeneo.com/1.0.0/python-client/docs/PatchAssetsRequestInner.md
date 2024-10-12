# PatchAssetsRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code of the asset | 
**created** | **str** | Date of creation | [optional] 
**updated** | **str** | Date of the last update | [optional] 
**values** | [**AssetAllOfEmbeddedItemsInnerAllOfValues**](AssetAllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.patch_assets_request_inner import PatchAssetsRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of PatchAssetsRequestInner from a JSON string
patch_assets_request_inner_instance = PatchAssetsRequestInner.from_json(json)
# print the JSON string representation of the object
print(PatchAssetsRequestInner.to_json())

# convert the object into a dict
patch_assets_request_inner_dict = patch_assets_request_inner_instance.to_dict()
# create an instance of PatchAssetsRequestInner from a dict
patch_assets_request_inner_from_dict = PatchAssetsRequestInner.from_dict(patch_assets_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


