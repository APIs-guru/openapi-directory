# AppCategoriesResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppCategoryAttributes**](AppCategoryAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppCategoryRelationships**](AppCategoryRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_categories_response_included_inner import AppCategoriesResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppCategoriesResponseIncludedInner from a JSON string
app_categories_response_included_inner_instance = AppCategoriesResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(AppCategoriesResponseIncludedInner.to_json())

# convert the object into a dict
app_categories_response_included_inner_dict = app_categories_response_included_inner_instance.to_dict()
# create an instance of AppCategoriesResponseIncludedInner from a dict
app_categories_response_included_inner_from_dict = AppCategoriesResponseIncludedInner.from_dict(app_categories_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


