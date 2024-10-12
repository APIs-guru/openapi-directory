# SingleMachineDependencyMapRequest

Specifies the computation of a single server dependency map. A single server dependency map includes all direct dependencies of a given machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_id** | **str** | URI of machine resource for which to generate the map. | 

## Example

```python
from openapi_client.models.single_machine_dependency_map_request import SingleMachineDependencyMapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SingleMachineDependencyMapRequest from a JSON string
single_machine_dependency_map_request_instance = SingleMachineDependencyMapRequest.from_json(json)
# print the JSON string representation of the object
print(SingleMachineDependencyMapRequest.to_json())

# convert the object into a dict
single_machine_dependency_map_request_dict = single_machine_dependency_map_request_instance.to_dict()
# create an instance of SingleMachineDependencyMapRequest from a dict
single_machine_dependency_map_request_from_dict = SingleMachineDependencyMapRequest.from_dict(single_machine_dependency_map_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


