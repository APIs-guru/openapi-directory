# Asset

Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_app** | [**AndroidAppAsset**](AndroidAppAsset.md) |  | [optional] 
**web** | [**WebAsset**](WebAsset.md) |  | [optional] 

## Example

```python
from openapi_client.models.asset import Asset

# TODO update the JSON string below
json = "{}"
# create an instance of Asset from a JSON string
asset_instance = Asset.from_json(json)
# print the JSON string representation of the object
print(Asset.to_json())

# convert the object into a dict
asset_dict = asset_instance.to_dict()
# create an instance of Asset from a dict
asset_from_dict = Asset.from_dict(asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


