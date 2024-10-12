# ServiceEvent

Represents the base for all Service Events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_id** | **str** | The identity of the service. This ID is an encoded representation of the service name. This is used in the REST APIs to identify the service resource. Starting in version 6.0, hierarchical names are delimited with the \&quot;\\~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1\\~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 

## Example

```python
from openapi_client.models.service_event import ServiceEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceEvent from a JSON string
service_event_instance = ServiceEvent.from_json(json)
# print the JSON string representation of the object
print(ServiceEvent.to_json())

# convert the object into a dict
service_event_dict = service_event_instance.to_dict()
# create an instance of ServiceEvent from a dict
service_event_from_dict = ServiceEvent.from_dict(service_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


