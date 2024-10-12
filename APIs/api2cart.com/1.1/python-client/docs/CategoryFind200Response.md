# CategoryFind200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CategoryFind200ResponseResult**](CategoryFind200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.category_find200_response import CategoryFind200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryFind200Response from a JSON string
category_find200_response_instance = CategoryFind200Response.from_json(json)
# print the JSON string representation of the object
print(CategoryFind200Response.to_json())

# convert the object into a dict
category_find200_response_dict = category_find200_response_instance.to_dict()
# create an instance of CategoryFind200Response from a dict
category_find200_response_from_dict = CategoryFind200Response.from_dict(category_find200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


