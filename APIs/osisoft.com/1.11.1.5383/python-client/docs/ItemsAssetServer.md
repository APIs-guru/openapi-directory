# ItemsAssetServer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AssetServer]**](AssetServer.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_asset_server import ItemsAssetServer

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAssetServer from a JSON string
items_asset_server_instance = ItemsAssetServer.from_json(json)
# print the JSON string representation of the object
print(ItemsAssetServer.to_json())

# convert the object into a dict
items_asset_server_dict = items_asset_server_instance.to_dict()
# create an instance of ItemsAssetServer from a dict
items_asset_server_from_dict = ItemsAssetServer.from_dict(items_asset_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


