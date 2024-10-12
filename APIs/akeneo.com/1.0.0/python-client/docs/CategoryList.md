# CategoryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Category code | 
**labels** | [**CategoriesAllOfEmbeddedItemsInnerAllOfLabels**](CategoriesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**parent** | **str** | Category code of the parent&#39;s category | [optional] [default to 'null']
**position** | **int** | Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter \&quot;with_position\&quot; is set to \&quot;true\&quot;) | [optional] 
**updated** | **str** | Date of the last update | [optional] 
**values** | [**CategoryListAllOfValues**](CategoryListAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.category_list import CategoryList

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryList from a JSON string
category_list_instance = CategoryList.from_json(json)
# print the JSON string representation of the object
print(CategoryList.to_json())

# convert the object into a dict
category_list_dict = category_list_instance.to_dict()
# create an instance of CategoryList from a dict
category_list_from_dict = CategoryList.from_dict(category_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


