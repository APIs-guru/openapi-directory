# GetCategoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Category]**](Category.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_categories_response import GetCategoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCategoriesResponse from a JSON string
get_categories_response_instance = GetCategoriesResponse.from_json(json)
# print the JSON string representation of the object
print(GetCategoriesResponse.to_json())

# convert the object into a dict
get_categories_response_dict = get_categories_response_instance.to_dict()
# create an instance of GetCategoriesResponse from a dict
get_categories_response_from_dict = GetCategoriesResponse.from_dict(get_categories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


