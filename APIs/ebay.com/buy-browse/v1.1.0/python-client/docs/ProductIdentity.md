# ProductIdentity

The type that defines the fields for the product identifier type/value pairs of product associated with an item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier_type** | **str** | The type of product identifier, such as UPC and EAN. | [optional] 
**identifier_value** | **str** | The product identifier value. | [optional] 

## Example

```python
from openapi_client.models.product_identity import ProductIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ProductIdentity from a JSON string
product_identity_instance = ProductIdentity.from_json(json)
# print the JSON string representation of the object
print(ProductIdentity.to_json())

# convert the object into a dict
product_identity_dict = product_identity_instance.to_dict()
# create an instance of ProductIdentity from a dict
product_identity_from_dict = ProductIdentity.from_dict(product_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


