# ProductReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link para acesso ao recurso | 
**id** | **str** | ID do recurso | 

## Example

```python
from openapi_client.models.product_reference import ProductReference

# TODO update the JSON string below
json = "{}"
# create an instance of ProductReference from a JSON string
product_reference_instance = ProductReference.from_json(json)
# print the JSON string representation of the object
print(ProductReference.to_json())

# convert the object into a dict
product_reference_dict = product_reference_instance.to_dict()
# create an instance of ProductReference from a dict
product_reference_from_dict = ProductReference.from_dict(product_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


