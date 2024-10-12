# BaseProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.base_product import BaseProduct

# TODO update the JSON string below
json = "{}"
# create an instance of BaseProduct from a JSON string
base_product_instance = BaseProduct.from_json(json)
# print the JSON string representation of the object
print(BaseProduct.to_json())

# convert the object into a dict
base_product_dict = base_product_instance.to_dict()
# create an instance of BaseProduct from a dict
base_product_from_dict = BaseProduct.from_dict(base_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


