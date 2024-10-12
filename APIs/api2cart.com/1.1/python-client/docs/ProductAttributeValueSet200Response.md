# ProductAttributeValueSet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductAttributeValueSet200ResponseResult**](ProductAttributeValueSet200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_attribute_value_set200_response import ProductAttributeValueSet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAttributeValueSet200Response from a JSON string
product_attribute_value_set200_response_instance = ProductAttributeValueSet200Response.from_json(json)
# print the JSON string representation of the object
print(ProductAttributeValueSet200Response.to_json())

# convert the object into a dict
product_attribute_value_set200_response_dict = product_attribute_value_set200_response_instance.to_dict()
# create an instance of ProductAttributeValueSet200Response from a dict
product_attribute_value_set200_response_from_dict = ProductAttributeValueSet200Response.from_dict(product_attribute_value_set200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


