# ServiceConfig

The configuration of the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apis** | [**List[Api]**](Api.md) | A list of API interfaces exported by this service. Contains only the names, versions, and method names of the interfaces. | [optional] 
**authentication** | [**Authentication**](Authentication.md) |  | [optional] 
**documentation** | [**Documentation**](Documentation.md) |  | [optional] 
**endpoints** | [**List[Endpoint]**](Endpoint.md) | Configuration for network endpoints. Contains only the names and aliases of the endpoints. | [optional] 
**monitored_resources** | [**List[MonitoredResourceDescriptor]**](MonitoredResourceDescriptor.md) | Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations. | [optional] 
**monitoring** | [**Monitoring**](Monitoring.md) |  | [optional] 
**name** | **str** | The DNS address at which this service is available. An example DNS address would be: &#x60;calendar.googleapis.com&#x60;. | [optional] 
**quota** | [**Quota**](Quota.md) |  | [optional] 
**title** | **str** | The product title for this service. | [optional] 
**usage** | [**Usage**](Usage.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_config import ServiceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConfig from a JSON string
service_config_instance = ServiceConfig.from_json(json)
# print the JSON string representation of the object
print(ServiceConfig.to_json())

# convert the object into a dict
service_config_dict = service_config_instance.to_dict()
# create an instance of ServiceConfig from a dict
service_config_from_dict = ServiceConfig.from_dict(service_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


