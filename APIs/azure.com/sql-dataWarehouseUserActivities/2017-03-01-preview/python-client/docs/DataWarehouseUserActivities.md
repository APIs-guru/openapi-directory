# DataWarehouseUserActivities

User activities of a data warehouse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataWarehouseUserActivitiesProperties**](DataWarehouseUserActivitiesProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_warehouse_user_activities import DataWarehouseUserActivities

# TODO update the JSON string below
json = "{}"
# create an instance of DataWarehouseUserActivities from a JSON string
data_warehouse_user_activities_instance = DataWarehouseUserActivities.from_json(json)
# print the JSON string representation of the object
print(DataWarehouseUserActivities.to_json())

# convert the object into a dict
data_warehouse_user_activities_dict = data_warehouse_user_activities_instance.to_dict()
# create an instance of DataWarehouseUserActivities from a dict
data_warehouse_user_activities_from_dict = DataWarehouseUserActivities.from_dict(data_warehouse_user_activities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


