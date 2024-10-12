# CategoryFind200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**List[CategoryFind200ResponseResultCategoryInner]**](CategoryFind200ResponseResultCategoryInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.category_find200_response_result import CategoryFind200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryFind200ResponseResult from a JSON string
category_find200_response_result_instance = CategoryFind200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(CategoryFind200ResponseResult.to_json())

# convert the object into a dict
category_find200_response_result_dict = category_find200_response_result_instance.to_dict()
# create an instance of CategoryFind200ResponseResult from a dict
category_find200_response_result_from_dict = CategoryFind200ResponseResult.from_dict(category_find200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


