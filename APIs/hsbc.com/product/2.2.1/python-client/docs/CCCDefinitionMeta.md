# CCCDefinitionMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CCCDefinition]**](CCCDefinition.md) |  | 
**meta** | [**MetaDefinition**](MetaDefinition.md) |  | 

## Example

```python
from openapi_client.models.ccc_definition_meta import CCCDefinitionMeta

# TODO update the JSON string below
json = "{}"
# create an instance of CCCDefinitionMeta from a JSON string
ccc_definition_meta_instance = CCCDefinitionMeta.from_json(json)
# print the JSON string representation of the object
print(CCCDefinitionMeta.to_json())

# convert the object into a dict
ccc_definition_meta_dict = ccc_definition_meta_instance.to_dict()
# create an instance of CCCDefinitionMeta from a dict
ccc_definition_meta_from_dict = CCCDefinitionMeta.from_dict(ccc_definition_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


