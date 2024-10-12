# FactoryRepoConfiguration

Factory's git repo information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Account name. | 
**collaboration_branch** | **str** | Collaboration branch. | 
**last_commit_id** | **str** | Last commit id. | [optional] 
**repository_name** | **str** | Repository name. | 
**root_folder** | **str** | Root folder. | 
**type** | **str** | Type of repo configuration. | 

## Example

```python
from openapi_client.models.factory_repo_configuration import FactoryRepoConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of FactoryRepoConfiguration from a JSON string
factory_repo_configuration_instance = FactoryRepoConfiguration.from_json(json)
# print the JSON string representation of the object
print(FactoryRepoConfiguration.to_json())

# convert the object into a dict
factory_repo_configuration_dict = factory_repo_configuration_instance.to_dict()
# create an instance of FactoryRepoConfiguration from a dict
factory_repo_configuration_from_dict = FactoryRepoConfiguration.from_dict(factory_repo_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


