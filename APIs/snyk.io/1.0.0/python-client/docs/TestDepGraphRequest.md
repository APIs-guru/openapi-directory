# TestDepGraphRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dep_graph** | [**TestDepGraphRequestDepGraph**](TestDepGraphRequestDepGraph.md) |  | 

## Example

```python
from openapi_client.models.test_dep_graph_request import TestDepGraphRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestDepGraphRequest from a JSON string
test_dep_graph_request_instance = TestDepGraphRequest.from_json(json)
# print the JSON string representation of the object
print(TestDepGraphRequest.to_json())

# convert the object into a dict
test_dep_graph_request_dict = test_dep_graph_request_instance.to_dict()
# create an instance of TestDepGraphRequest from a dict
test_dep_graph_request_from_dict = TestDepGraphRequest.from_dict(test_dep_graph_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


