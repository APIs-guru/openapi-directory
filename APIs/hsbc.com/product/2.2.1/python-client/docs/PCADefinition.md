# PCADefinition

Open Banking Personal Current Account product data details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | [**List[BrandInner2]**](BrandInner2.md) | Brand registered by the banking group at https://register.fca.org.uk/ | 

## Example

```python
from openapi_client.models.pca_definition import PCADefinition

# TODO update the JSON string below
json = "{}"
# create an instance of PCADefinition from a JSON string
pca_definition_instance = PCADefinition.from_json(json)
# print the JSON string representation of the object
print(PCADefinition.to_json())

# convert the object into a dict
pca_definition_dict = pca_definition_instance.to_dict()
# create an instance of PCADefinition from a dict
pca_definition_from_dict = PCADefinition.from_dict(pca_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


