# PCADefinitionMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PCADefinition]**](PCADefinition.md) |  | 
**meta** | [**MetaDefinition**](MetaDefinition.md) |  | 

## Example

```python
from openapi_client.models.pca_definition_meta import PCADefinitionMeta

# TODO update the JSON string below
json = "{}"
# create an instance of PCADefinitionMeta from a JSON string
pca_definition_meta_instance = PCADefinitionMeta.from_json(json)
# print the JSON string representation of the object
print(PCADefinitionMeta.to_json())

# convert the object into a dict
pca_definition_meta_dict = pca_definition_meta_instance.to_dict()
# create an instance of PCADefinitionMeta from a dict
pca_definition_meta_from_dict = PCADefinitionMeta.from_dict(pca_definition_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


