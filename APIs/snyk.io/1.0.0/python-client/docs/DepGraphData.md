# DepGraphData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graph** | [**Graph**](Graph.md) |  | 
**pkg_manager** | [**PkgManager**](PkgManager.md) |  | 
**pkgs** | **List[object]** | Array of package dependencies. | 
**schema_version** | **str** | Snyk DepGraph library schema version. | 

## Example

```python
from openapi_client.models.dep_graph_data import DepGraphData

# TODO update the JSON string below
json = "{}"
# create an instance of DepGraphData from a JSON string
dep_graph_data_instance = DepGraphData.from_json(json)
# print the JSON string representation of the object
print(DepGraphData.to_json())

# convert the object into a dict
dep_graph_data_dict = dep_graph_data_instance.to_dict()
# create an instance of DepGraphData from a dict
dep_graph_data_from_dict = DepGraphData.from_dict(dep_graph_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


