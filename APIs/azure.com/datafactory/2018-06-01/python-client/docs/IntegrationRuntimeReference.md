# IntegrationRuntimeReference

Integration runtime reference type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, object]** | An object mapping parameter names to argument values. | [optional] 
**reference_name** | **str** | Reference integration runtime name. | 
**type** | **str** | Type of integration runtime. | 

## Example

```python
from openapi_client.models.integration_runtime_reference import IntegrationRuntimeReference

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeReference from a JSON string
integration_runtime_reference_instance = IntegrationRuntimeReference.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeReference.to_json())

# convert the object into a dict
integration_runtime_reference_dict = integration_runtime_reference_instance.to_dict()
# create an instance of IntegrationRuntimeReference from a dict
integration_runtime_reference_from_dict = IntegrationRuntimeReference.from_dict(integration_runtime_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


