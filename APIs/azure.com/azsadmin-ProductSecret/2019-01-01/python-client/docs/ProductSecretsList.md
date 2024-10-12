# ProductSecretsList

List of product secrets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[ProductSecret]**](ProductSecret.md) | List of product secrets. | [optional] 

## Example

```python
from openapi_client.models.product_secrets_list import ProductSecretsList

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSecretsList from a JSON string
product_secrets_list_instance = ProductSecretsList.from_json(json)
# print the JSON string representation of the object
print(ProductSecretsList.to_json())

# convert the object into a dict
product_secrets_list_dict = product_secrets_list_instance.to_dict()
# create an instance of ProductSecretsList from a dict
product_secrets_list_from_dict = ProductSecretsList.from_dict(product_secrets_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


