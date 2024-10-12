# ManagedGroupConfig

Specifies the resources used to actively manage an instance group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_group_manager_name** | **str** | Output only. The name of the Instance Group Manager for this group. | [optional] [readonly] 
**instance_group_manager_uri** | **str** | Output only. The partial URI to the instance group manager for this group. E.g. projects/my-project/regions/us-central1/instanceGroupManagers/my-igm. | [optional] [readonly] 
**instance_template_name** | **str** | Output only. The name of the Instance Template used for the Managed Instance Group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_group_config import ManagedGroupConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedGroupConfig from a JSON string
managed_group_config_instance = ManagedGroupConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedGroupConfig.to_json())

# convert the object into a dict
managed_group_config_dict = managed_group_config_instance.to_dict()
# create an instance of ManagedGroupConfig from a dict
managed_group_config_from_dict = ManagedGroupConfig.from_dict(managed_group_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


