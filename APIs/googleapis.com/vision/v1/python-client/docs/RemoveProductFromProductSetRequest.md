# RemoveProductFromProductSetRequest

Request message for the `RemoveProductFromProductSet` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | **str** | Required. The resource name for the Product to be removed from this ProductSet. Format is: &#x60;projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID&#x60; | [optional] 

## Example

```python
from openapi_client.models.remove_product_from_product_set_request import RemoveProductFromProductSetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveProductFromProductSetRequest from a JSON string
remove_product_from_product_set_request_instance = RemoveProductFromProductSetRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveProductFromProductSetRequest.to_json())

# convert the object into a dict
remove_product_from_product_set_request_dict = remove_product_from_product_set_request_instance.to_dict()
# create an instance of RemoveProductFromProductSetRequest from a dict
remove_product_from_product_set_request_from_dict = RemoveProductFromProductSetRequest.from_dict(remove_product_from_product_set_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


