# ServiceDeletedEvent

Service Deleted event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | Application name. | 
**application_type_name** | **str** | Application type name. | 
**is_stateful** | **bool** | Indicates if Service is stateful. | 
**min_replica_set_size** | **int** | Minimum size of replicas set. | 
**partition_count** | **int** | Number of partitions. | 
**service_instance** | **int** | Id of Service instance. | 
**service_package_version** | **str** | Version of Service package. | 
**service_type_name** | **str** | Service type name. | 
**target_replica_set_size** | **int** | Size of target replicas set. | 

## Example

```python
from openapi_client.models.service_deleted_event import ServiceDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDeletedEvent from a JSON string
service_deleted_event_instance = ServiceDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(ServiceDeletedEvent.to_json())

# convert the object into a dict
service_deleted_event_dict = service_deleted_event_instance.to_dict()
# create an instance of ServiceDeletedEvent from a dict
service_deleted_event_from_dict = ServiceDeletedEvent.from_dict(service_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


