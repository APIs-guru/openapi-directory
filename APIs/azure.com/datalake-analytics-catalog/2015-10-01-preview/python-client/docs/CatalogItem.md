# CatalogItem

A Data Lake Analytics catalog item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.catalog_item import CatalogItem

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogItem from a JSON string
catalog_item_instance = CatalogItem.from_json(json)
# print the JSON string representation of the object
print(CatalogItem.to_json())

# convert the object into a dict
catalog_item_dict = catalog_item_instance.to_dict()
# create an instance of CatalogItem from a dict
catalog_item_from_dict = CatalogItem.from_dict(catalog_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


