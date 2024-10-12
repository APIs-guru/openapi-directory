# SqlserverWorkload

The body of sqlserver workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ags** | [**List[AvailabilityGroup]**](AvailabilityGroup.md) | Output only. The availability groups for sqlserver | [optional] [readonly] 
**cluster** | [**Cluster**](Cluster.md) |  | [optional] 
**databases** | [**List[Database]**](Database.md) | Output only. The databases for sqlserver | [optional] [readonly] 
**load_balancer_server** | [**LoadBalancerServer**](LoadBalancerServer.md) |  | [optional] 

## Example

```python
from openapi_client.models.sqlserver_workload import SqlserverWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of SqlserverWorkload from a JSON string
sqlserver_workload_instance = SqlserverWorkload.from_json(json)
# print the JSON string representation of the object
print(SqlserverWorkload.to_json())

# convert the object into a dict
sqlserver_workload_dict = sqlserver_workload_instance.to_dict()
# create an instance of SqlserverWorkload from a dict
sqlserver_workload_from_dict = SqlserverWorkload.from_dict(sqlserver_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


