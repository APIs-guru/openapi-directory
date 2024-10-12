# ProductOptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for the option of the product. | [optional] 
**name** | **str** | The name of the option for the product. | [optional] 
**values** | **List[Optional[str]]** |  | [optional] 

## Example

```python
from openapi_client.models.product_options_inner import ProductOptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionsInner from a JSON string
product_options_inner_instance = ProductOptionsInner.from_json(json)
# print the JSON string representation of the object
print(ProductOptionsInner.to_json())

# convert the object into a dict
product_options_inner_dict = product_options_inner_instance.to_dict()
# create an instance of ProductOptionsInner from a dict
product_options_inner_from_dict = ProductOptionsInner.from_dict(product_options_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


