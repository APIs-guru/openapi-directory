# ScopedResourceListResult

A list of scoped resources in a private link scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ScopedResource]**](ScopedResource.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scoped_resource_list_result import ScopedResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ScopedResourceListResult from a JSON string
scoped_resource_list_result_instance = ScopedResourceListResult.from_json(json)
# print the JSON string representation of the object
print(ScopedResourceListResult.to_json())

# convert the object into a dict
scoped_resource_list_result_dict = scoped_resource_list_result_instance.to_dict()
# create an instance of ScopedResourceListResult from a dict
scoped_resource_list_result_from_dict = ScopedResourceListResult.from_dict(scoped_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


