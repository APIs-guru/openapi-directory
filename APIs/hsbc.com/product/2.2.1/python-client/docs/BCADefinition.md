# BCADefinition

Open Banking Business Current Account product data details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | [**List[BrandInner]**](BrandInner.md) | Brand registered by the banking group at https://register.fca.org.uk/ | 

## Example

```python
from openapi_client.models.bca_definition import BCADefinition

# TODO update the JSON string below
json = "{}"
# create an instance of BCADefinition from a JSON string
bca_definition_instance = BCADefinition.from_json(json)
# print the JSON string representation of the object
print(BCADefinition.to_json())

# convert the object into a dict
bca_definition_dict = bca_definition_instance.to_dict()
# create an instance of BCADefinition from a dict
bca_definition_from_dict = BCADefinition.from_dict(bca_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


