# ProductListByTags200ResponseValueInner

TagResource contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**ProductListByTags200ResponseValueInnerApi**](ProductListByTags200ResponseValueInnerApi.md) |  | [optional] 
**operation** | [**ProductListByTags200ResponseValueInnerOperation**](ProductListByTags200ResponseValueInnerOperation.md) |  | [optional] 
**product** | [**ProductListByTags200ResponseValueInnerProduct**](ProductListByTags200ResponseValueInnerProduct.md) |  | [optional] 
**tag** | [**ProductListByTags200ResponseValueInnerTag**](ProductListByTags200ResponseValueInnerTag.md) |  | 

## Example

```python
from openapi_client.models.product_list_by_tags200_response_value_inner import ProductListByTags200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListByTags200ResponseValueInner from a JSON string
product_list_by_tags200_response_value_inner_instance = ProductListByTags200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ProductListByTags200ResponseValueInner.to_json())

# convert the object into a dict
product_list_by_tags200_response_value_inner_dict = product_list_by_tags200_response_value_inner_instance.to_dict()
# create an instance of ProductListByTags200ResponseValueInner from a dict
product_list_by_tags200_response_value_inner_from_dict = ProductListByTags200ResponseValueInner.from_dict(product_list_by_tags200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


