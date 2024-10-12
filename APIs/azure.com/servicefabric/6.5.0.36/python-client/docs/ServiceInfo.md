# ServiceInfo

Information about a Service Fabric service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**id** | **str** | The identity of the service. This ID is an encoded representation of the service name. This is used in the REST APIs to identify the service resource. Starting in version 6.0, hierarchical names are delimited with the \&quot;\\~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1\\~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | [optional] 
**is_service_group** | **bool** | Whether the service is in a service group. | [optional] 
**manifest_version** | **str** | The version of the service manifest. | [optional] 
**name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_status** | [**ServiceStatus**](ServiceStatus.md) |  | [optional] 
**type_name** | **str** | Name of the service type as specified in the service manifest. | [optional] 

## Example

```python
from openapi_client.models.service_info import ServiceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceInfo from a JSON string
service_info_instance = ServiceInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceInfo.to_json())

# convert the object into a dict
service_info_dict = service_info_instance.to_dict()
# create an instance of ServiceInfo from a dict
service_info_from_dict = ServiceInfo.from_dict(service_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


