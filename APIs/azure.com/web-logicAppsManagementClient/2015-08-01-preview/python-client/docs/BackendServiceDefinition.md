# BackendServiceDefinition

API definitions with backend urls

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.backend_service_definition import BackendServiceDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of BackendServiceDefinition from a JSON string
backend_service_definition_instance = BackendServiceDefinition.from_json(json)
# print the JSON string representation of the object
print(BackendServiceDefinition.to_json())

# convert the object into a dict
backend_service_definition_dict = backend_service_definition_instance.to_dict()
# create an instance of BackendServiceDefinition from a dict
backend_service_definition_from_dict = BackendServiceDefinition.from_dict(backend_service_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


