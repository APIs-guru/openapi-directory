# ItemsAssetDatabase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AssetDatabase]**](AssetDatabase.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_asset_database import ItemsAssetDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAssetDatabase from a JSON string
items_asset_database_instance = ItemsAssetDatabase.from_json(json)
# print the JSON string representation of the object
print(ItemsAssetDatabase.to_json())

# convert the object into a dict
items_asset_database_dict = items_asset_database_instance.to_dict()
# create an instance of ItemsAssetDatabase from a dict
items_asset_database_from_dict = ItemsAssetDatabase.from_dict(items_asset_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


