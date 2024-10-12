# CategoriesEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique ID of the category. | 
**ignored** | **bool** | Defines whether this category is ignored or not. | 
**label** | **str** | Full label of the category. | 
**last_update_timestamp** | **int** | Timestamp for when the category was last updated in the customer&#39;s database. | 
**short_label** | **str** | Short label of the category (generally less than 5 characters). | 

## Example

```python
from openapi_client.models.categories_entity import CategoriesEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CategoriesEntity from a JSON string
categories_entity_instance = CategoriesEntity.from_json(json)
# print the JSON string representation of the object
print(CategoriesEntity.to_json())

# convert the object into a dict
categories_entity_dict = categories_entity_instance.to_dict()
# create an instance of CategoriesEntity from a dict
categories_entity_from_dict = CategoriesEntity.from_dict(categories_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


