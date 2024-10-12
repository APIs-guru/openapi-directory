# SMELendingDefinitionMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SMELendingDefinition]**](SMELendingDefinition.md) |  | 
**meta** | [**MetaDefinition**](MetaDefinition.md) |  | 

## Example

```python
from openapi_client.models.sme_lending_definition_meta import SMELendingDefinitionMeta

# TODO update the JSON string below
json = "{}"
# create an instance of SMELendingDefinitionMeta from a JSON string
sme_lending_definition_meta_instance = SMELendingDefinitionMeta.from_json(json)
# print the JSON string representation of the object
print(SMELendingDefinitionMeta.to_json())

# convert the object into a dict
sme_lending_definition_meta_dict = sme_lending_definition_meta_instance.to_dict()
# create an instance of SMELendingDefinitionMeta from a dict
sme_lending_definition_meta_from_dict = SMELendingDefinitionMeta.from_dict(sme_lending_definition_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


