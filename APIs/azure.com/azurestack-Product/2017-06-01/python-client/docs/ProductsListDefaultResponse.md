# ProductsListDefaultResponse

Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ProductsListDefaultResponseError**](ProductsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.products_list_default_response import ProductsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsListDefaultResponse from a JSON string
products_list_default_response_instance = ProductsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ProductsListDefaultResponse.to_json())

# convert the object into a dict
products_list_default_response_dict = products_list_default_response_instance.to_dict()
# create an instance of ProductsListDefaultResponse from a dict
products_list_default_response_from_dict = ProductsListDefaultResponse.from_dict(products_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


