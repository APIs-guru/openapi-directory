# PaginatedAssetList

A paginated list of Assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A continuation link (absolute URI) to the next page of results in the list. | [optional] 
**value** | [**List[Asset]**](Asset.md) | An array of objects of type Asset. | [optional] 

## Example

```python
from openapi_client.models.paginated_asset_list import PaginatedAssetList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedAssetList from a JSON string
paginated_asset_list_instance = PaginatedAssetList.from_json(json)
# print the JSON string representation of the object
print(PaginatedAssetList.to_json())

# convert the object into a dict
paginated_asset_list_dict = paginated_asset_list_instance.to_dict()
# create an instance of PaginatedAssetList from a dict
paginated_asset_list_from_dict = PaginatedAssetList.from_dict(paginated_asset_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


