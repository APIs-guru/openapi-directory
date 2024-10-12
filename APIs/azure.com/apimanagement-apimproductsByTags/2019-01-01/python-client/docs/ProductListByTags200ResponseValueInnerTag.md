# ProductListByTags200ResponseValueInnerTag

Contract defining the Tag property in the Tag Resource Contract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Tag identifier | [optional] 
**name** | **str** | Tag Name | [optional] 

## Example

```python
from openapi_client.models.product_list_by_tags200_response_value_inner_tag import ProductListByTags200ResponseValueInnerTag

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListByTags200ResponseValueInnerTag from a JSON string
product_list_by_tags200_response_value_inner_tag_instance = ProductListByTags200ResponseValueInnerTag.from_json(json)
# print the JSON string representation of the object
print(ProductListByTags200ResponseValueInnerTag.to_json())

# convert the object into a dict
product_list_by_tags200_response_value_inner_tag_dict = product_list_by_tags200_response_value_inner_tag_instance.to_dict()
# create an instance of ProductListByTags200ResponseValueInnerTag from a dict
product_list_by_tags200_response_value_inner_tag_from_dict = ProductListByTags200ResponseValueInnerTag.from_dict(product_list_by_tags200_response_value_inner_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


