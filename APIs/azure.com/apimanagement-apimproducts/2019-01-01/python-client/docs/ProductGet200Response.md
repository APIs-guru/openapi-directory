# ProductGet200Response

Product details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductListByService200ResponseValueInnerProperties**](ProductListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_get200_response import ProductGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGet200Response from a JSON string
product_get200_response_instance = ProductGet200Response.from_json(json)
# print the JSON string representation of the object
print(ProductGet200Response.to_json())

# convert the object into a dict
product_get200_response_dict = product_get200_response_instance.to_dict()
# create an instance of ProductGet200Response from a dict
product_get200_response_from_dict = ProductGet200Response.from_dict(product_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


