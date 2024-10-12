# AppCategoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppCategory**](AppCategory.md) |  | 
**included** | [**List[AppCategoriesResponseIncludedInner]**](AppCategoriesResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_category_response import AppCategoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppCategoryResponse from a JSON string
app_category_response_instance = AppCategoryResponse.from_json(json)
# print the JSON string representation of the object
print(AppCategoryResponse.to_json())

# convert the object into a dict
app_category_response_dict = app_category_response_instance.to_dict()
# create an instance of AppCategoryResponse from a dict
app_category_response_from_dict = AppCategoryResponse.from_dict(app_category_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


