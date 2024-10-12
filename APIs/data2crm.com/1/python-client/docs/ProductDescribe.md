# ProductDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_describe import ProductDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDescribe from a JSON string
product_describe_instance = ProductDescribe.from_json(json)
# print the JSON string representation of the object
print(ProductDescribe.to_json())

# convert the object into a dict
product_describe_dict = product_describe_instance.to_dict()
# create an instance of ProductDescribe from a dict
product_describe_from_dict = ProductDescribe.from_dict(product_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


