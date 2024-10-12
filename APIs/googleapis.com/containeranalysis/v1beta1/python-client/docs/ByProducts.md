# ByProducts

Defines an object for the byproducts field in in-toto links. The suggested fields are \"stderr\", \"stdout\", and \"return-value\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_values** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.by_products import ByProducts

# TODO update the JSON string below
json = "{}"
# create an instance of ByProducts from a JSON string
by_products_instance = ByProducts.from_json(json)
# print the JSON string representation of the object
print(ByProducts.to_json())

# convert the object into a dict
by_products_dict = by_products_instance.to_dict()
# create an instance of ByProducts from a dict
by_products_from_dict = ByProducts.from_dict(by_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


