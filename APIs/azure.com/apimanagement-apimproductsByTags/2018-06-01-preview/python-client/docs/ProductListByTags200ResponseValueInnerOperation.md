# ProductListByTags200ResponseValueInnerOperation

Operation Entity contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_name** | **str** | Api Name. | [optional] [readonly] 
**api_revision** | **str** | Api Revision. | [optional] [readonly] 
**api_version** | **str** | Api Version. | [optional] [readonly] 
**description** | **str** | Operation Description. | [optional] [readonly] 
**id** | **str** | Identifier of the operation in form /operations/{operationId}. | [optional] 
**method** | **str** | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | [optional] [readonly] 
**name** | **str** | Operation name. | [optional] [readonly] 
**url_template** | **str** | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date&#x3D;{date} | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_list_by_tags200_response_value_inner_operation import ProductListByTags200ResponseValueInnerOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListByTags200ResponseValueInnerOperation from a JSON string
product_list_by_tags200_response_value_inner_operation_instance = ProductListByTags200ResponseValueInnerOperation.from_json(json)
# print the JSON string representation of the object
print(ProductListByTags200ResponseValueInnerOperation.to_json())

# convert the object into a dict
product_list_by_tags200_response_value_inner_operation_dict = product_list_by_tags200_response_value_inner_operation_instance.to_dict()
# create an instance of ProductListByTags200ResponseValueInnerOperation from a dict
product_list_by_tags200_response_value_inner_operation_from_dict = ProductListByTags200ResponseValueInnerOperation.from_dict(product_list_by_tags200_response_value_inner_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


