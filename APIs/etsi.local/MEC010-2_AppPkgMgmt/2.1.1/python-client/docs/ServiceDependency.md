# ServiceDependency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_permissions** | **List[str]** | Requested permissions regarding the access of the application to the service. See clause 8.2 of ETSI GS MEC 009 [4]. The format of this attribute is left for the data model design stage. | [optional] 
**ser_category** | **object** | See MEC011 | [optional] 
**ser_name** | **str** | The name of the service, for example, RNIS, LocationService, etc. | 
**ser_transport_dependencies** | [**List[TransportDependency]**](TransportDependency.md) | Indicates transport and serialization format dependencies of consuming the service. Defaults to REST + JSON if absent. See note. | [optional] 
**version** | **str** | The version of the service. | 

## Example

```python
from openapi_client.models.service_dependency import ServiceDependency

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDependency from a JSON string
service_dependency_instance = ServiceDependency.from_json(json)
# print the JSON string representation of the object
print(ServiceDependency.to_json())

# convert the object into a dict
service_dependency_dict = service_dependency_instance.to_dict()
# create an instance of ServiceDependency from a dict
service_dependency_from_dict = ServiceDependency.from_dict(service_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


