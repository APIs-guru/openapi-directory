# ProductUpdateRequest

Product Update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductUpdateRequestProperties**](ProductUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_update_request import ProductUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUpdateRequest from a JSON string
product_update_request_instance = ProductUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ProductUpdateRequest.to_json())

# convert the object into a dict
product_update_request_dict = product_update_request_instance.to_dict()
# create an instance of ProductUpdateRequest from a dict
product_update_request_from_dict = ProductUpdateRequest.from_dict(product_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


