# ServiceReplicaList

A pageable list of replicas of a service resource. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[ServiceReplicaDescription]**](ServiceReplicaDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.service_replica_list import ServiceReplicaList

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceReplicaList from a JSON string
service_replica_list_instance = ServiceReplicaList.from_json(json)
# print the JSON string representation of the object
print(ServiceReplicaList.to_json())

# convert the object into a dict
service_replica_list_dict = service_replica_list_instance.to_dict()
# create an instance of ServiceReplicaList from a dict
service_replica_list_from_dict = ServiceReplicaList.from_dict(service_replica_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


