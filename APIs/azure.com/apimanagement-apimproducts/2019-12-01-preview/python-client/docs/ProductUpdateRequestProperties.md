# ProductUpdateRequestProperties

Parameters supplied to the Update Product operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Product name. | [optional] 

## Example

```python
from openapi_client.models.product_update_request_properties import ProductUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUpdateRequestProperties from a JSON string
product_update_request_properties_instance = ProductUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ProductUpdateRequestProperties.to_json())

# convert the object into a dict
product_update_request_properties_dict = product_update_request_properties_instance.to_dict()
# create an instance of ProductUpdateRequestProperties from a dict
product_update_request_properties_from_dict = ProductUpdateRequestProperties.from_dict(product_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


