# ProductListDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.product_list_default_response_details_inner import ProductListDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListDefaultResponseDetailsInner from a JSON string
product_list_default_response_details_inner_instance = ProductListDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ProductListDefaultResponseDetailsInner.to_json())

# convert the object into a dict
product_list_default_response_details_inner_dict = product_list_default_response_details_inner_instance.to_dict()
# create an instance of ProductListDefaultResponseDetailsInner from a dict
product_list_default_response_details_inner_from_dict = ProductListDefaultResponseDetailsInner.from_dict(product_list_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


