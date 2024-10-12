# BranchDefinitionMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BranchDefinition]**](BranchDefinition.md) |  | 
**meta** | [**MetaDefinition**](MetaDefinition.md) |  | 

## Example

```python
from openapi_client.models.branch_definition_meta import BranchDefinitionMeta

# TODO update the JSON string below
json = "{}"
# create an instance of BranchDefinitionMeta from a JSON string
branch_definition_meta_instance = BranchDefinitionMeta.from_json(json)
# print the JSON string representation of the object
print(BranchDefinitionMeta.to_json())

# convert the object into a dict
branch_definition_meta_dict = branch_definition_meta_instance.to_dict()
# create an instance of BranchDefinitionMeta from a dict
branch_definition_meta_from_dict = BranchDefinitionMeta.from_dict(branch_definition_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


