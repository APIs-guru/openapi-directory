# AssetFilterCollection

A collection of AssetFilter items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[AssetFilter]**](AssetFilter.md) | A collection of AssetFilter items. | [optional] 

## Example

```python
from openapi_client.models.asset_filter_collection import AssetFilterCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFilterCollection from a JSON string
asset_filter_collection_instance = AssetFilterCollection.from_json(json)
# print the JSON string representation of the object
print(AssetFilterCollection.to_json())

# convert the object into a dict
asset_filter_collection_dict = asset_filter_collection_instance.to_dict()
# create an instance of AssetFilterCollection from a dict
asset_filter_collection_from_dict = AssetFilterCollection.from_dict(asset_filter_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


