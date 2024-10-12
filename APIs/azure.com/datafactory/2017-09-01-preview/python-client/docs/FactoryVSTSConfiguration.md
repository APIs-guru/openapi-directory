# FactoryVSTSConfiguration

Factory's VSTS repo information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | VSTS account name. | [optional] 
**collaboration_branch** | **str** | VSTS collaboration branch. | [optional] 
**last_commit_id** | **str** | VSTS last commit id. | [optional] 
**project_name** | **str** | VSTS project name. | [optional] 
**repository_name** | **str** | VSTS repository name. | [optional] 
**root_folder** | **str** | VSTS root folder. | [optional] 
**tenant_id** | **str** | VSTS tenant id. | [optional] 

## Example

```python
from openapi_client.models.factory_vsts_configuration import FactoryVSTSConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of FactoryVSTSConfiguration from a JSON string
factory_vsts_configuration_instance = FactoryVSTSConfiguration.from_json(json)
# print the JSON string representation of the object
print(FactoryVSTSConfiguration.to_json())

# convert the object into a dict
factory_vsts_configuration_dict = factory_vsts_configuration_instance.to_dict()
# create an instance of FactoryVSTSConfiguration from a dict
factory_vsts_configuration_from_dict = FactoryVSTSConfiguration.from_dict(factory_vsts_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


