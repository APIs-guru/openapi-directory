# ListMaintenanceConfigurationsResult

Response for MaintenanceConfigurations list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MaintenanceConfiguration]**](MaintenanceConfiguration.md) | The list of maintenance Configurations | [optional] 

## Example

```python
from openapi_client.models.list_maintenance_configurations_result import ListMaintenanceConfigurationsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListMaintenanceConfigurationsResult from a JSON string
list_maintenance_configurations_result_instance = ListMaintenanceConfigurationsResult.from_json(json)
# print the JSON string representation of the object
print(ListMaintenanceConfigurationsResult.to_json())

# convert the object into a dict
list_maintenance_configurations_result_dict = list_maintenance_configurations_result_instance.to_dict()
# create an instance of ListMaintenanceConfigurationsResult from a dict
list_maintenance_configurations_result_from_dict = ListMaintenanceConfigurationsResult.from_dict(list_maintenance_configurations_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


