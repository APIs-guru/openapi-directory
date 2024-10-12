# ApplicationEvent

Represents the base for all Application Events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The identity of the application. This is an encoded representation of the application name. This is used in the REST APIs to identify the application resource. Starting in version 6.0, hierarchical names are delimited with the \&quot;\\~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp\\~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 

## Example

```python
from openapi_client.models.application_event import ApplicationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationEvent from a JSON string
application_event_instance = ApplicationEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationEvent.to_json())

# convert the object into a dict
application_event_dict = application_event_instance.to_dict()
# create an instance of ApplicationEvent from a dict
application_event_from_dict = ApplicationEvent.from_dict(application_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


