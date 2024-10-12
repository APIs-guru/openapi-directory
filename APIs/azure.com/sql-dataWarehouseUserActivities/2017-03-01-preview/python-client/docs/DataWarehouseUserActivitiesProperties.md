# DataWarehouseUserActivitiesProperties

User activities of a data warehouse. This currently includes the count of running or suspended queries. For more information, please view the sys.dm_pdw_exec_requests dynamic management view (DMV).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_queries_count** | **int** | Count of running and suspended queries. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_warehouse_user_activities_properties import DataWarehouseUserActivitiesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataWarehouseUserActivitiesProperties from a JSON string
data_warehouse_user_activities_properties_instance = DataWarehouseUserActivitiesProperties.from_json(json)
# print the JSON string representation of the object
print(DataWarehouseUserActivitiesProperties.to_json())

# convert the object into a dict
data_warehouse_user_activities_properties_dict = data_warehouse_user_activities_properties_instance.to_dict()
# create an instance of DataWarehouseUserActivitiesProperties from a dict
data_warehouse_user_activities_properties_from_dict = DataWarehouseUserActivitiesProperties.from_dict(data_warehouse_user_activities_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


