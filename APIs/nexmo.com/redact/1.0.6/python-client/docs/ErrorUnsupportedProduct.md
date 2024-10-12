# ErrorUnsupportedProduct

Unsupported Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_unsupported_product import ErrorUnsupportedProduct

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorUnsupportedProduct from a JSON string
error_unsupported_product_instance = ErrorUnsupportedProduct.from_json(json)
# print the JSON string representation of the object
print(ErrorUnsupportedProduct.to_json())

# convert the object into a dict
error_unsupported_product_dict = error_unsupported_product_instance.to_dict()
# create an instance of ErrorUnsupportedProduct from a dict
error_unsupported_product_from_dict = ErrorUnsupportedProduct.from_dict(error_unsupported_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


