# Product

Product specification for Condor resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine** | **str** | The specific engine that the underlying database is running. | [optional] 
**type** | **str** | Type of specific database product. It could be CloudSQL, AlloyDB etc.. | [optional] 
**version** | **str** | Version of the underlying database engine. Example values: For MySQL, it could be \&quot;8.0\&quot;, \&quot;5.7\&quot; etc.. For Postgres, it could be \&quot;14\&quot;, \&quot;15\&quot; etc.. | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


