# CategoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**Categories**](Categories.md) |  | [optional] 

## Example

```python
from openapi_client.models.categories_response import CategoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CategoriesResponse from a JSON string
categories_response_instance = CategoriesResponse.from_json(json)
# print the JSON string representation of the object
print(CategoriesResponse.to_json())

# convert the object into a dict
categories_response_dict = categories_response_instance.to_dict()
# create an instance of CategoriesResponse from a dict
categories_response_from_dict = CategoriesResponse.from_dict(categories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


