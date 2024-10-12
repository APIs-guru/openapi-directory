# CategoryImageAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CategoryImageAdd200ResponseResult**](CategoryImageAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.category_image_add200_response import CategoryImageAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryImageAdd200Response from a JSON string
category_image_add200_response_instance = CategoryImageAdd200Response.from_json(json)
# print the JSON string representation of the object
print(CategoryImageAdd200Response.to_json())

# convert the object into a dict
category_image_add200_response_dict = category_image_add200_response_instance.to_dict()
# create an instance of CategoryImageAdd200Response from a dict
category_image_add200_response_from_dict = CategoryImageAdd200Response.from_dict(category_image_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


