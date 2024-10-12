# BranchYamlConfiguration

The build configuration in Azure pipeline YAML format

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**yaml** | **str** | Azure Pipelines YAML file | [optional] 

## Example

```python
from openapi_client.models.branch_yaml_configuration import BranchYamlConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BranchYamlConfiguration from a JSON string
branch_yaml_configuration_instance = BranchYamlConfiguration.from_json(json)
# print the JSON string representation of the object
print(BranchYamlConfiguration.to_json())

# convert the object into a dict
branch_yaml_configuration_dict = branch_yaml_configuration_instance.to_dict()
# create an instance of BranchYamlConfiguration from a dict
branch_yaml_configuration_from_dict = BranchYamlConfiguration.from_dict(branch_yaml_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


