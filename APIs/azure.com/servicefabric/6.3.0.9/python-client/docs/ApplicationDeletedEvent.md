# ApplicationDeletedEvent

Application Deleted event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_name** | **str** | Application type name. | 
**application_type_version** | **str** | Application type version. | 

## Example

```python
from openapi_client.models.application_deleted_event import ApplicationDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDeletedEvent from a JSON string
application_deleted_event_instance = ApplicationDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationDeletedEvent.to_json())

# convert the object into a dict
application_deleted_event_dict = application_deleted_event_instance.to_dict()
# create an instance of ApplicationDeletedEvent from a dict
application_deleted_event_from_dict = ApplicationDeletedEvent.from_dict(application_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


