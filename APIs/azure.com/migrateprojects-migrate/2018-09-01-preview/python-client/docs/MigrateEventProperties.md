# MigrateEventProperties

Properties of the error resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_request_id** | **str** | Gets or sets the client request Id of the payload for which the event is being reported. | [optional] 
**error_code** | **str** | Gets or sets the error code. | [optional] 
**error_message** | **str** | Gets or sets the error message. | [optional] 
**instance_type** | **str** | Gets the Instance type. | [optional] [readonly] 
**possible_causes** | **str** | Gets or sets the possible causes for the error. | [optional] 
**recommendation** | **str** | Gets or sets the recommendation for the error. | [optional] 
**solution** | **str** | Gets or sets the solution for which the error is being reported. | [optional] 

## Example

```python
from openapi_client.models.migrate_event_properties import MigrateEventProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateEventProperties from a JSON string
migrate_event_properties_instance = MigrateEventProperties.from_json(json)
# print the JSON string representation of the object
print(MigrateEventProperties.to_json())

# convert the object into a dict
migrate_event_properties_dict = migrate_event_properties_instance.to_dict()
# create an instance of MigrateEventProperties from a dict
migrate_event_properties_from_dict = MigrateEventProperties.from_dict(migrate_event_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


