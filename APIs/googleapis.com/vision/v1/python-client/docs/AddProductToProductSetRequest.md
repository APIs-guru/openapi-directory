# AddProductToProductSetRequest

Request message for the `AddProductToProductSet` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | **str** | Required. The resource name for the Product to be added to this ProductSet. Format is: &#x60;projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID&#x60; | [optional] 

## Example

```python
from openapi_client.models.add_product_to_product_set_request import AddProductToProductSetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddProductToProductSetRequest from a JSON string
add_product_to_product_set_request_instance = AddProductToProductSetRequest.from_json(json)
# print the JSON string representation of the object
print(AddProductToProductSetRequest.to_json())

# convert the object into a dict
add_product_to_product_set_request_dict = add_product_to_product_set_request_instance.to_dict()
# create an instance of AddProductToProductSetRequest from a dict
add_product_to_product_set_request_from_dict = AddProductToProductSetRequest.from_dict(add_product_to_product_set_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


