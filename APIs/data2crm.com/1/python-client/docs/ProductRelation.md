# ProductRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**ProductEntityRelation**](ProductEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.product_relation import ProductRelation

# TODO update the JSON string below
json = "{}"
# create an instance of ProductRelation from a JSON string
product_relation_instance = ProductRelation.from_json(json)
# print the JSON string representation of the object
print(ProductRelation.to_json())

# convert the object into a dict
product_relation_dict = product_relation_instance.to_dict()
# create an instance of ProductRelation from a dict
product_relation_from_dict = ProductRelation.from_dict(product_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


