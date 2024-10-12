# DpmContainer

DPM workload-specific protection container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_re_register** | **bool** | Specifies whether the container is re-registrable. | [optional] 
**container_id** | **str** | ID of container. | [optional] 
**dpm_agent_version** | **str** | Backup engine Agent version | [optional] 
**dpm_servers** | **List[str]** | List of BackupEngines protecting the container | [optional] 
**extended_info** | [**DPMContainerExtendedInfo**](DPMContainerExtendedInfo.md) |  | [optional] 
**protected_item_count** | **int** | Number of protected items in the BackupEngine | [optional] 
**protection_status** | **str** | Protection status of the container. | [optional] 
**upgrade_available** | **bool** | To check if upgrade available | [optional] 

## Example

```python
from openapi_client.models.dpm_container import DpmContainer

# TODO update the JSON string below
json = "{}"
# create an instance of DpmContainer from a JSON string
dpm_container_instance = DpmContainer.from_json(json)
# print the JSON string representation of the object
print(DpmContainer.to_json())

# convert the object into a dict
dpm_container_dict = dpm_container_instance.to_dict()
# create an instance of DpmContainer from a dict
dpm_container_from_dict = DpmContainer.from_dict(dpm_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


