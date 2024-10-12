# CategoryInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Category**](Category.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.category_info200_response import CategoryInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryInfo200Response from a JSON string
category_info200_response_instance = CategoryInfo200Response.from_json(json)
# print the JSON string representation of the object
print(CategoryInfo200Response.to_json())

# convert the object into a dict
category_info200_response_dict = category_info200_response_instance.to_dict()
# create an instance of CategoryInfo200Response from a dict
category_info200_response_from_dict = CategoryInfo200Response.from_dict(category_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


