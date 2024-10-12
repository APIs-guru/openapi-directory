# ProductApiCreateOrUpdate200Response

API details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductApiListByProduct200ResponseValueInnerProperties**](ProductApiListByProduct200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_api_create_or_update200_response import ProductApiCreateOrUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductApiCreateOrUpdate200Response from a JSON string
product_api_create_or_update200_response_instance = ProductApiCreateOrUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(ProductApiCreateOrUpdate200Response.to_json())

# convert the object into a dict
product_api_create_or_update200_response_dict = product_api_create_or_update200_response_instance.to_dict()
# create an instance of ProductApiCreateOrUpdate200Response from a dict
product_api_create_or_update200_response_from_dict = ProductApiCreateOrUpdate200Response.from_dict(product_api_create_or_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


