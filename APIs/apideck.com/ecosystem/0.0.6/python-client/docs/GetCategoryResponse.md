# GetCategoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Category**](Category.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_category_response import GetCategoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCategoryResponse from a JSON string
get_category_response_instance = GetCategoryResponse.from_json(json)
# print the JSON string representation of the object
print(GetCategoryResponse.to_json())

# convert the object into a dict
get_category_response_dict = get_category_response_instance.to_dict()
# create an instance of GetCategoryResponse from a dict
get_category_response_from_dict = GetCategoryResponse.from_dict(get_category_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


