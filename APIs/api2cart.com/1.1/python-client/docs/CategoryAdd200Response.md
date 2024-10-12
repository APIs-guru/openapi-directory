# CategoryAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CategoryAdd200ResponseResult**](CategoryAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.category_add200_response import CategoryAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryAdd200Response from a JSON string
category_add200_response_instance = CategoryAdd200Response.from_json(json)
# print the JSON string representation of the object
print(CategoryAdd200Response.to_json())

# convert the object into a dict
category_add200_response_dict = category_add200_response_instance.to_dict()
# create an instance of CategoryAdd200Response from a dict
category_add200_response_from_dict = CategoryAdd200Response.from_dict(category_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


