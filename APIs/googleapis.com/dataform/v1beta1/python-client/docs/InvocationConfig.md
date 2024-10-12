# InvocationConfig

Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fully_refresh_incremental_tables_enabled** | **bool** | Optional. When set to true, any incremental tables will be fully refreshed. | [optional] 
**included_tags** | **List[str]** | Optional. The set of tags to include. | [optional] 
**included_targets** | [**List[Target]**](Target.md) | Optional. The set of action identifiers to include. | [optional] 
**service_account** | **str** | Optional. The service account to run workflow invocations under. | [optional] 
**transitive_dependencies_included** | **bool** | Optional. When set to true, transitive dependencies of included actions will be executed. | [optional] 
**transitive_dependents_included** | **bool** | Optional. When set to true, transitive dependents of included actions will be executed. | [optional] 

## Example

```python
from openapi_client.models.invocation_config import InvocationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InvocationConfig from a JSON string
invocation_config_instance = InvocationConfig.from_json(json)
# print the JSON string representation of the object
print(InvocationConfig.to_json())

# convert the object into a dict
invocation_config_dict = invocation_config_instance.to_dict()
# create an instance of InvocationConfig from a dict
invocation_config_from_dict = InvocationConfig.from_dict(invocation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


