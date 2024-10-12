# UpdateConfiguration

Update specific properties of the software update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_virtual_machines** | **List[str]** | List of azure resource Ids for azure virtual machines targeted by the software update configuration. | [optional] 
**duration** | **str** | Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601 | [optional] 
**linux** | [**LinuxProperties**](LinuxProperties.md) |  | [optional] 
**non_azure_computer_names** | **List[str]** | List of names of non-azure machines targeted by the software update configuration. | [optional] 
**operating_system** | [**OperatingSystemType**](OperatingSystemType.md) |  | 
**targets** | [**TargetProperties**](TargetProperties.md) |  | [optional] 
**windows** | [**WindowsProperties**](WindowsProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_configuration import UpdateConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConfiguration from a JSON string
update_configuration_instance = UpdateConfiguration.from_json(json)
# print the JSON string representation of the object
print(UpdateConfiguration.to_json())

# convert the object into a dict
update_configuration_dict = update_configuration_instance.to_dict()
# create an instance of UpdateConfiguration from a dict
update_configuration_from_dict = UpdateConfiguration.from_dict(update_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


