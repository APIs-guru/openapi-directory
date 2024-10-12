# MachineMigrateEventProperties

Properties of the machine error resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine** | **str** | Gets or sets the machine for which the error is being reported. | [optional] 

## Example

```python
from openapi_client.models.machine_migrate_event_properties import MachineMigrateEventProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MachineMigrateEventProperties from a JSON string
machine_migrate_event_properties_instance = MachineMigrateEventProperties.from_json(json)
# print the JSON string representation of the object
print(MachineMigrateEventProperties.to_json())

# convert the object into a dict
machine_migrate_event_properties_dict = machine_migrate_event_properties_instance.to_dict()
# create an instance of MachineMigrateEventProperties from a dict
machine_migrate_event_properties_from_dict = MachineMigrateEventProperties.from_dict(machine_migrate_event_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


