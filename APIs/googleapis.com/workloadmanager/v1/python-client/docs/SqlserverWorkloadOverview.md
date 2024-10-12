# SqlserverWorkloadOverview

The overview of sqlserver workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_group** | **List[str]** | Output only. The availability groups | [optional] [readonly] 
**sqlserver_system_id** | **str** | Output only. The UUID for a Sqlserver workload | [optional] [readonly] 

## Example

```python
from openapi_client.models.sqlserver_workload_overview import SqlserverWorkloadOverview

# TODO update the JSON string below
json = "{}"
# create an instance of SqlserverWorkloadOverview from a JSON string
sqlserver_workload_overview_instance = SqlserverWorkloadOverview.from_json(json)
# print the JSON string representation of the object
print(SqlserverWorkloadOverview.to_json())

# convert the object into a dict
sqlserver_workload_overview_dict = sqlserver_workload_overview_instance.to_dict()
# create an instance of SqlserverWorkloadOverview from a dict
sqlserver_workload_overview_from_dict = SqlserverWorkloadOverview.from_dict(sqlserver_workload_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


