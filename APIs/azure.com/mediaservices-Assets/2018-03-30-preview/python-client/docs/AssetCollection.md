# AssetCollection

A collection of Asset items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[Asset]**](Asset.md) | A collection of Asset items. | [optional] 

## Example

```python
from openapi_client.models.asset_collection import AssetCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AssetCollection from a JSON string
asset_collection_instance = AssetCollection.from_json(json)
# print the JSON string representation of the object
print(AssetCollection.to_json())

# convert the object into a dict
asset_collection_dict = asset_collection_instance.to_dict()
# create an instance of AssetCollection from a dict
asset_collection_from_dict = AssetCollection.from_dict(asset_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


