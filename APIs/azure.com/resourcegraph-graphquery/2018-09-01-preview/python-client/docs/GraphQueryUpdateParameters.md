# GraphQueryUpdateParameters

The parameters that can be provided when updating workbook properties properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict. | [optional] 
**properties** | [**GraphQueryPropertiesUpdateParameters**](GraphQueryPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.graph_query_update_parameters import GraphQueryUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GraphQueryUpdateParameters from a JSON string
graph_query_update_parameters_instance = GraphQueryUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(GraphQueryUpdateParameters.to_json())

# convert the object into a dict
graph_query_update_parameters_dict = graph_query_update_parameters_instance.to_dict()
# create an instance of GraphQueryUpdateParameters from a dict
graph_query_update_parameters_from_dict = GraphQueryUpdateParameters.from_dict(graph_query_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


