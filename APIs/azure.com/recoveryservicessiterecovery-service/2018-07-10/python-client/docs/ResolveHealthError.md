# ResolveHealthError

Resolve health errors input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_error_id** | **str** | Health error id. | [optional] 

## Example

```python
from openapi_client.models.resolve_health_error import ResolveHealthError

# TODO update the JSON string below
json = "{}"
# create an instance of ResolveHealthError from a JSON string
resolve_health_error_instance = ResolveHealthError.from_json(json)
# print the JSON string representation of the object
print(ResolveHealthError.to_json())

# convert the object into a dict
resolve_health_error_dict = resolve_health_error_instance.to_dict()
# create an instance of ResolveHealthError from a dict
resolve_health_error_from_dict = ResolveHealthError.from_dict(resolve_health_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


