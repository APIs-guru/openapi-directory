# FactoryRepoUpdate

Factory's VSTS repo information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factory_resource_id** | **str** | The factory resource id. | [optional] 
**resource_group_name** | **str** | The resource group name. | [optional] 
**vsts_configuration** | [**FactoryVSTSConfiguration**](FactoryVSTSConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.factory_repo_update import FactoryRepoUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of FactoryRepoUpdate from a JSON string
factory_repo_update_instance = FactoryRepoUpdate.from_json(json)
# print the JSON string representation of the object
print(FactoryRepoUpdate.to_json())

# convert the object into a dict
factory_repo_update_dict = factory_repo_update_instance.to_dict()
# create an instance of FactoryRepoUpdate from a dict
factory_repo_update_from_dict = FactoryRepoUpdate.from_dict(factory_repo_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


