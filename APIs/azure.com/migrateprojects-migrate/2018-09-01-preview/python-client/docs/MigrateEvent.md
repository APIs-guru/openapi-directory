# MigrateEvent

MigrateEvent REST resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the relative URL to get to this REST resource. | [optional] 
**name** | **str** | Gets or sets the name of this REST resource. | [optional] 
**properties** | [**MigrateEventProperties**](MigrateEventProperties.md) |  | [optional] 
**type** | **str** | Gets the type of this REST resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migrate_event import MigrateEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateEvent from a JSON string
migrate_event_instance = MigrateEvent.from_json(json)
# print the JSON string representation of the object
print(MigrateEvent.to_json())

# convert the object into a dict
migrate_event_dict = migrate_event_instance.to_dict()
# create an instance of MigrateEvent from a dict
migrate_event_from_dict = MigrateEvent.from_dict(migrate_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


