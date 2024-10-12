# ResponseCategoryListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**categories_count** | **int** |  | [optional] 
**category** | [**List[Category]**](Category.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.response_category_list_result import ResponseCategoryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCategoryListResult from a JSON string
response_category_list_result_instance = ResponseCategoryListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseCategoryListResult.to_json())

# convert the object into a dict
response_category_list_result_dict = response_category_list_result_instance.to_dict()
# create an instance of ResponseCategoryListResult from a dict
response_category_list_result_from_dict = ResponseCategoryListResult.from_dict(response_category_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


