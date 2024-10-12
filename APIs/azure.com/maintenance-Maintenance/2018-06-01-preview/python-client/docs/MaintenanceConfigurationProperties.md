# MaintenanceConfigurationProperties

Properties for maintenance configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension_properties** | **Dict[str, str]** | Gets or sets extensionProperties of the maintenanceConfiguration | [optional] 
**maintenance_scope** | **str** | Gets or sets maintenanceScope of the configuration | [optional] 
**namespace** | **str** | Gets or sets namespace of the resource | [optional] 

## Example

```python
from openapi_client.models.maintenance_configuration_properties import MaintenanceConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceConfigurationProperties from a JSON string
maintenance_configuration_properties_instance = MaintenanceConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(MaintenanceConfigurationProperties.to_json())

# convert the object into a dict
maintenance_configuration_properties_dict = maintenance_configuration_properties_instance.to_dict()
# create an instance of MaintenanceConfigurationProperties from a dict
maintenance_configuration_properties_from_dict = MaintenanceConfigurationProperties.from_dict(maintenance_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


