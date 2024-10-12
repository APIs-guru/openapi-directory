# CategoriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] [readonly] 
**name** | **str** | The name of the category. | [optional] [readonly] 

## Example

```python
from openapi_client.models.categories_inner import CategoriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CategoriesInner from a JSON string
categories_inner_instance = CategoriesInner.from_json(json)
# print the JSON string representation of the object
print(CategoriesInner.to_json())

# convert the object into a dict
categories_inner_dict = categories_inner_instance.to_dict()
# create an instance of CategoriesInner from a dict
categories_inner_from_dict = CategoriesInner.from_dict(categories_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


