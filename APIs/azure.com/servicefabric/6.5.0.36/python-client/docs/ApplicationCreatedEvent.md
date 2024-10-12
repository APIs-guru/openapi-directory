# ApplicationCreatedEvent

Application Created event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_definition_kind** | **str** | Application definition kind. | 
**application_type_name** | **str** | Application type name. | 
**application_type_version** | **str** | Application type version. | 

## Example

```python
from openapi_client.models.application_created_event import ApplicationCreatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationCreatedEvent from a JSON string
application_created_event_instance = ApplicationCreatedEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationCreatedEvent.to_json())

# convert the object into a dict
application_created_event_dict = application_created_event_instance.to_dict()
# create an instance of ApplicationCreatedEvent from a dict
application_created_event_from_dict = ApplicationCreatedEvent.from_dict(application_created_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


