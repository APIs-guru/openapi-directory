# AppCategoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppCategory]**](AppCategory.md) |  | 
**included** | [**List[AppCategoriesResponseIncludedInner]**](AppCategoriesResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_categories_response import AppCategoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppCategoriesResponse from a JSON string
app_categories_response_instance = AppCategoriesResponse.from_json(json)
# print the JSON string representation of the object
print(AppCategoriesResponse.to_json())

# convert the object into a dict
app_categories_response_dict = app_categories_response_instance.to_dict()
# create an instance of AppCategoriesResponse from a dict
app_categories_response_from_dict = AppCategoriesResponse.from_dict(app_categories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


