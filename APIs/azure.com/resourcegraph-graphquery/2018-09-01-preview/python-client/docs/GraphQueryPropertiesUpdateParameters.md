# GraphQueryPropertiesUpdateParameters

Properties that contain a workbook for PATCH operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of a graph query. | [optional] 
**query** | **str** | KQL query that will be graph. | [optional] 

## Example

```python
from openapi_client.models.graph_query_properties_update_parameters import GraphQueryPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GraphQueryPropertiesUpdateParameters from a JSON string
graph_query_properties_update_parameters_instance = GraphQueryPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(GraphQueryPropertiesUpdateParameters.to_json())

# convert the object into a dict
graph_query_properties_update_parameters_dict = graph_query_properties_update_parameters_instance.to_dict()
# create an instance of GraphQueryPropertiesUpdateParameters from a dict
graph_query_properties_update_parameters_from_dict = GraphQueryPropertiesUpdateParameters.from_dict(graph_query_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


