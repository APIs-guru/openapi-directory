# DashboardQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builder_config** | [**BuilderConfig**](BuilderConfig.md) |  | [optional] 
**edit_mode** | [**QueryEditMode**](QueryEditMode.md) |  | [optional] 
**name** | **str** |  | [optional] 
**text** | **str** | The text of the Flux query. | [optional] 

## Example

```python
from openapi_client.models.dashboard_query import DashboardQuery

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardQuery from a JSON string
dashboard_query_instance = DashboardQuery.from_json(json)
# print the JSON string representation of the object
print(DashboardQuery.to_json())

# convert the object into a dict
dashboard_query_dict = dashboard_query_instance.to_dict()
# create an instance of DashboardQuery from a dict
dashboard_query_from_dict = DashboardQuery.from_dict(dashboard_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


