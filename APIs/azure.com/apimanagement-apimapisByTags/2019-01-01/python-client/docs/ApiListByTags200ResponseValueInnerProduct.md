# ApiListByTags200ResponseValueInnerProduct

Product profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the product in the form of /products/{productId} | [optional] 
**name** | **str** | Product name. | 

## Example

```python
from openapi_client.models.api_list_by_tags200_response_value_inner_product import ApiListByTags200ResponseValueInnerProduct

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByTags200ResponseValueInnerProduct from a JSON string
api_list_by_tags200_response_value_inner_product_instance = ApiListByTags200ResponseValueInnerProduct.from_json(json)
# print the JSON string representation of the object
print(ApiListByTags200ResponseValueInnerProduct.to_json())

# convert the object into a dict
api_list_by_tags200_response_value_inner_product_dict = api_list_by_tags200_response_value_inner_product_instance.to_dict()
# create an instance of ApiListByTags200ResponseValueInnerProduct from a dict
api_list_by_tags200_response_value_inner_product_from_dict = ApiListByTags200ResponseValueInnerProduct.from_dict(api_list_by_tags200_response_value_inner_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


