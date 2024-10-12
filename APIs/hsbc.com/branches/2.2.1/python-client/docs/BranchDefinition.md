# BranchDefinition

Environment of the branch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | [**List[BrandInner]**](BrandInner.md) | Brand owned by an organisation | 

## Example

```python
from openapi_client.models.branch_definition import BranchDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of BranchDefinition from a JSON string
branch_definition_instance = BranchDefinition.from_json(json)
# print the JSON string representation of the object
print(BranchDefinition.to_json())

# convert the object into a dict
branch_definition_dict = branch_definition_instance.to_dict()
# create an instance of BranchDefinition from a dict
branch_definition_from_dict = BranchDefinition.from_dict(branch_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


