# AssetLocation

Describes the access location for a web service asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **str** | Access credentials for the asset, if applicable (e.g. asset specified by storage account connection string + blob URI) | [optional] 
**uri** | **str** | The URI where the asset is accessible from, (e.g. aml://abc for system assets or https://xyz for user assets | 

## Example

```python
from openapi_client.models.asset_location import AssetLocation

# TODO update the JSON string below
json = "{}"
# create an instance of AssetLocation from a JSON string
asset_location_instance = AssetLocation.from_json(json)
# print the JSON string representation of the object
print(AssetLocation.to_json())

# convert the object into a dict
asset_location_dict = asset_location_instance.to_dict()
# create an instance of AssetLocation from a dict
asset_location_from_dict = AssetLocation.from_dict(asset_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


