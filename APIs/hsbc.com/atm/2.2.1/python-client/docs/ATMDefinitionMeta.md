# ATMDefinitionMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ATMDefinition]**](ATMDefinition.md) |  | 
**meta** | [**MetaDefinition**](MetaDefinition.md) |  | 

## Example

```python
from openapi_client.models.atm_definition_meta import ATMDefinitionMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ATMDefinitionMeta from a JSON string
atm_definition_meta_instance = ATMDefinitionMeta.from_json(json)
# print the JSON string representation of the object
print(ATMDefinitionMeta.to_json())

# convert the object into a dict
atm_definition_meta_dict = atm_definition_meta_instance.to_dict()
# create an instance of ATMDefinitionMeta from a dict
atm_definition_meta_from_dict = ATMDefinitionMeta.from_dict(atm_definition_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


