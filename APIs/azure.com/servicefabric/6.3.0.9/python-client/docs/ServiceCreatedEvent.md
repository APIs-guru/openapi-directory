# ServiceCreatedEvent

Service Created event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | Application name. | 
**application_type_name** | **str** | Application type name. | 
**is_stateful** | **bool** | Indicates if Service is stateful. | 
**min_replica_set_size** | **int** | Minimum size of replicas set. | 
**partition_count** | **int** | Number of partitions. | 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | 
**service_instance** | **int** | Id of Service instance. | 
**service_package_version** | **str** | Version of Service package. | 
**service_type_name** | **str** | Service type name. | 
**target_replica_set_size** | **int** | Size of target replicas set. | 

## Example

```python
from openapi_client.models.service_created_event import ServiceCreatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCreatedEvent from a JSON string
service_created_event_instance = ServiceCreatedEvent.from_json(json)
# print the JSON string representation of the object
print(ServiceCreatedEvent.to_json())

# convert the object into a dict
service_created_event_dict = service_created_event_instance.to_dict()
# create an instance of ServiceCreatedEvent from a dict
service_created_event_from_dict = ServiceCreatedEvent.from_dict(service_created_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


