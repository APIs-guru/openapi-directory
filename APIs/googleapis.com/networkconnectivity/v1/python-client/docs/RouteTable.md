# RouteTable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the route table was created. | [optional] [readonly] 
**description** | **str** | An optional description of the route table. | [optional] 
**labels** | **Dict[str, str]** | Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). | [optional] 
**name** | **str** | Immutable. The name of the route table. Route table names must be unique. They use the following form: &#x60;projects/{project_number}/locations/global/hubs/{hub}/routeTables/{route_table_id}&#x60; | [optional] 
**state** | **str** | Output only. The current lifecycle state of this route table. | [optional] [readonly] 
**uid** | **str** | Output only. The Google-generated UUID for the route table. This value is unique across all route table resources. If a route table is deleted and another with the same name is created, the new route table is assigned a different &#x60;uid&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. The time the route table was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_table import RouteTable

# TODO update the JSON string below
json = "{}"
# create an instance of RouteTable from a JSON string
route_table_instance = RouteTable.from_json(json)
# print the JSON string representation of the object
print(RouteTable.to_json())

# convert the object into a dict
route_table_dict = route_table_instance.to_dict()
# create an instance of RouteTable from a dict
route_table_from_dict = RouteTable.from_dict(route_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


