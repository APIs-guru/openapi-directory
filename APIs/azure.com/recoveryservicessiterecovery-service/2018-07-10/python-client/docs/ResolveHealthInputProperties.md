# ResolveHealthInputProperties

Resolve health input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_errors** | [**List[ResolveHealthError]**](ResolveHealthError.md) | Health errors. | [optional] 

## Example

```python
from openapi_client.models.resolve_health_input_properties import ResolveHealthInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResolveHealthInputProperties from a JSON string
resolve_health_input_properties_instance = ResolveHealthInputProperties.from_json(json)
# print the JSON string representation of the object
print(ResolveHealthInputProperties.to_json())

# convert the object into a dict
resolve_health_input_properties_dict = resolve_health_input_properties_instance.to_dict()
# create an instance of ResolveHealthInputProperties from a dict
resolve_health_input_properties_from_dict = ResolveHealthInputProperties.from_dict(resolve_health_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


