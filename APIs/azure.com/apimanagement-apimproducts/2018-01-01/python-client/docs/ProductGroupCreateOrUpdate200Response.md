# ProductGroupCreateOrUpdate200Response

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductGroupListByProduct200ResponseValueInnerProperties**](ProductGroupListByProduct200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_group_create_or_update200_response import ProductGroupCreateOrUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupCreateOrUpdate200Response from a JSON string
product_group_create_or_update200_response_instance = ProductGroupCreateOrUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(ProductGroupCreateOrUpdate200Response.to_json())

# convert the object into a dict
product_group_create_or_update200_response_dict = product_group_create_or_update200_response_instance.to_dict()
# create an instance of ProductGroupCreateOrUpdate200Response from a dict
product_group_create_or_update200_response_from_dict = ProductGroupCreateOrUpdate200Response.from_dict(product_group_create_or_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


