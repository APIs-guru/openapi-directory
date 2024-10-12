# CatalogItemList

A Data Lake Analytics catalog item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.catalog_item_list import CatalogItemList

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogItemList from a JSON string
catalog_item_list_instance = CatalogItemList.from_json(json)
# print the JSON string representation of the object
print(CatalogItemList.to_json())

# convert the object into a dict
catalog_item_list_dict = catalog_item_list_instance.to_dict()
# create an instance of CatalogItemList from a dict
catalog_item_list_from_dict = CatalogItemList.from_dict(catalog_item_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


