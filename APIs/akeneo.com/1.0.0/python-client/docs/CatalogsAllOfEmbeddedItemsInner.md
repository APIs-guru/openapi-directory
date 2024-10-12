# CatalogsAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**enabled** | **bool** | Whether the catalog is enabled or not | [optional] [default to False]
**id** | **str** | Catalog id | [optional] 
**name** | **str** | Catalog name | [optional] 

## Example

```python
from openapi_client.models.catalogs_all_of_embedded_items_inner import CatalogsAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogsAllOfEmbeddedItemsInner from a JSON string
catalogs_all_of_embedded_items_inner_instance = CatalogsAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(CatalogsAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
catalogs_all_of_embedded_items_inner_dict = catalogs_all_of_embedded_items_inner_instance.to_dict()
# create an instance of CatalogsAllOfEmbeddedItemsInner from a dict
catalogs_all_of_embedded_items_inner_from_dict = CatalogsAllOfEmbeddedItemsInner.from_dict(catalogs_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


