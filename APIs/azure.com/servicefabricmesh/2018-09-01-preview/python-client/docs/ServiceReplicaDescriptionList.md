# ServiceReplicaDescriptionList

A pageable list of service replicas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[ServiceReplicaDescription]**](ServiceReplicaDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.service_replica_description_list import ServiceReplicaDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceReplicaDescriptionList from a JSON string
service_replica_description_list_instance = ServiceReplicaDescriptionList.from_json(json)
# print the JSON string representation of the object
print(ServiceReplicaDescriptionList.to_json())

# convert the object into a dict
service_replica_description_list_dict = service_replica_description_list_instance.to_dict()
# create an instance of ServiceReplicaDescriptionList from a dict
service_replica_description_list_from_dict = ServiceReplicaDescriptionList.from_dict(service_replica_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


