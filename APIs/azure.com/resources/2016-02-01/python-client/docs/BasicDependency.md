# BasicDependency

Deployment dependency information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the dependency. | [optional] 
**resource_name** | **str** | The dependency resource name. | [optional] 
**resource_type** | **str** | The dependency resource type. | [optional] 

## Example

```python
from openapi_client.models.basic_dependency import BasicDependency

# TODO update the JSON string below
json = "{}"
# create an instance of BasicDependency from a JSON string
basic_dependency_instance = BasicDependency.from_json(json)
# print the JSON string representation of the object
print(BasicDependency.to_json())

# convert the object into a dict
basic_dependency_dict = basic_dependency_instance.to_dict()
# create an instance of BasicDependency from a dict
basic_dependency_from_dict = BasicDependency.from_dict(basic_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


