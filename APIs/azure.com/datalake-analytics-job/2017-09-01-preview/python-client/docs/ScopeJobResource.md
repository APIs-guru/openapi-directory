# ScopeJobResource

The Scope job resources. (Only for use internally with Scope job type.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the resource. | [optional] 
**path** | **str** | The path to the resource. | [optional] 

## Example

```python
from openapi_client.models.scope_job_resource import ScopeJobResource

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeJobResource from a JSON string
scope_job_resource_instance = ScopeJobResource.from_json(json)
# print the JSON string representation of the object
print(ScopeJobResource.to_json())

# convert the object into a dict
scope_job_resource_dict = scope_job_resource_instance.to_dict()
# create an instance of ScopeJobResource from a dict
scope_job_resource_from_dict = ScopeJobResource.from_dict(scope_job_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


