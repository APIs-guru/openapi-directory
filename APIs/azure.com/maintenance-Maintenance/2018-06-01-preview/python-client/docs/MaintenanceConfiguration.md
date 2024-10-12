# MaintenanceConfiguration

Maintenance configuration record type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets location of the resource | [optional] 
**properties** | [**MaintenanceConfigurationProperties**](MaintenanceConfigurationProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets tags of the resource | [optional] 
**id** | **str** | Fully qualified identifier of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**type** | **str** | Type of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.maintenance_configuration import MaintenanceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceConfiguration from a JSON string
maintenance_configuration_instance = MaintenanceConfiguration.from_json(json)
# print the JSON string representation of the object
print(MaintenanceConfiguration.to_json())

# convert the object into a dict
maintenance_configuration_dict = maintenance_configuration_instance.to_dict()
# create an instance of MaintenanceConfiguration from a dict
maintenance_configuration_from_dict = MaintenanceConfiguration.from_dict(maintenance_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


