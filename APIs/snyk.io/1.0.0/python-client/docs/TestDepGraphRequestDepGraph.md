# TestDepGraphRequestDepGraph

A [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata) defining all packages and their relationships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graph** | [**TestDepGraphRequestDepGraphGraph**](TestDepGraphRequestDepGraphGraph.md) |  | 
**pkg_manager** | [**MonitorDepGraphRequestDepGraphPkgManager**](MonitorDepGraphRequestDepGraphPkgManager.md) |  | 
**pkgs** | **List[object]** | Array of package dependencies. | 
**schema_version** | **str** | Snyk DepGraph library schema version. | 

## Example

```python
from openapi_client.models.test_dep_graph_request_dep_graph import TestDepGraphRequestDepGraph

# TODO update the JSON string below
json = "{}"
# create an instance of TestDepGraphRequestDepGraph from a JSON string
test_dep_graph_request_dep_graph_instance = TestDepGraphRequestDepGraph.from_json(json)
# print the JSON string representation of the object
print(TestDepGraphRequestDepGraph.to_json())

# convert the object into a dict
test_dep_graph_request_dep_graph_dict = test_dep_graph_request_dep_graph_instance.to_dict()
# create an instance of TestDepGraphRequestDepGraph from a dict
test_dep_graph_request_dep_graph_from_dict = TestDepGraphRequestDepGraph.from_dict(test_dep_graph_request_dep_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


