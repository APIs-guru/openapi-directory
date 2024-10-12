# ScopeMapListResult

The result of a request to list scope maps for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next list of scope maps. | [optional] 
**value** | [**List[ScopeMap]**](ScopeMap.md) | The list of scope maps. Since this list may be incomplete, the nextLink field should be used to request the next list of scope maps. | [optional] 

## Example

```python
from openapi_client.models.scope_map_list_result import ScopeMapListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeMapListResult from a JSON string
scope_map_list_result_instance = ScopeMapListResult.from_json(json)
# print the JSON string representation of the object
print(ScopeMapListResult.to_json())

# convert the object into a dict
scope_map_list_result_dict = scope_map_list_result_instance.to_dict()
# create an instance of ScopeMapListResult from a dict
scope_map_list_result_from_dict = ScopeMapListResult.from_dict(scope_map_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


