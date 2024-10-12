# ProductsListDefaultResponseError

The details of the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] [readonly] 
**message** | **str** | Error message indicating why the operation failed. | [optional] [readonly] 
**target** | **str** | The target of the particular error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.products_list_default_response_error import ProductsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsListDefaultResponseError from a JSON string
products_list_default_response_error_instance = ProductsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(ProductsListDefaultResponseError.to_json())

# convert the object into a dict
products_list_default_response_error_dict = products_list_default_response_error_instance.to_dict()
# create an instance of ProductsListDefaultResponseError from a dict
products_list_default_response_error_from_dict = ProductsListDefaultResponseError.from_dict(products_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


