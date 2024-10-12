# Dependency

Deployment dependency information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depends_on** | [**List[BasicDependency]**](BasicDependency.md) | The list of dependencies. | [optional] 
**id** | **str** | The ID of the dependency. | [optional] 
**resource_name** | **str** | The dependency resource name. | [optional] 
**resource_type** | **str** | The dependency resource type. | [optional] 

## Example

```python
from openapi_client.models.dependency import Dependency

# TODO update the JSON string below
json = "{}"
# create an instance of Dependency from a JSON string
dependency_instance = Dependency.from_json(json)
# print the JSON string representation of the object
print(Dependency.to_json())

# convert the object into a dict
dependency_dict = dependency_instance.to_dict()
# create an instance of Dependency from a dict
dependency_from_dict = Dependency.from_dict(dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


