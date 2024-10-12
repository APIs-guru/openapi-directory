# ServiceFabricProperties

Properties of a service fabric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_schedule** | [**ApplicableSchedule**](ApplicableSchedule.md) |  | [optional] 
**environment_id** | **str** | The resource id of the environment under which the service fabric resource is present | [optional] 
**external_service_fabric_id** | **str** | The backing service fabric resource&#39;s id | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] [readonly] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_fabric_properties import ServiceFabricProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceFabricProperties from a JSON string
service_fabric_properties_instance = ServiceFabricProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceFabricProperties.to_json())

# convert the object into a dict
service_fabric_properties_dict = service_fabric_properties_instance.to_dict()
# create an instance of ServiceFabricProperties from a dict
service_fabric_properties_from_dict = ServiceFabricProperties.from_dict(service_fabric_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


