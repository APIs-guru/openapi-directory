# Service

Service is an App Hub data model that contains a discovered service, which represents a network/api interface that exposes some functionality to clients for consumption over the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Attributes**](Attributes.md) |  | [optional] 
**create_time** | **str** | Output only. Create time. | [optional] [readonly] 
**description** | **str** | Optional. User-defined description of a Service. Can have a maximum length of 2048 characters. | [optional] 
**discovered_service** | **str** | Required. Immutable. The resource name of the original discovered service. | [optional] 
**display_name** | **str** | Optional. User-defined name for the Service. Can have a maximum length of 63 characters. | [optional] 
**name** | **str** | Identifier. The resource name of a Service. Format: \&quot;projects/{host-project-id}/locations/{location}/applications/{application-id}/services/{service-id}\&quot; | [optional] 
**service_properties** | [**ServiceProperties**](ServiceProperties.md) |  | [optional] 
**service_reference** | [**ServiceReference**](ServiceReference.md) |  | [optional] 
**state** | **str** | Output only. Service state. | [optional] [readonly] 
**uid** | **str** | Output only. A universally unique identifier (UUID) for the &#x60;Service&#x60; in the UUID4 format. | [optional] [readonly] 
**update_time** | **str** | Output only. Update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


