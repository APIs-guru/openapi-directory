# IntegrationRuntimeDebugResource

Integration runtime debug resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, object]** | Azure Data Factory nested object which serves as a compute resource for activities. | 
**name** | **str** | The resource name. | [optional] 

## Example

```python
from openapi_client.models.integration_runtime_debug_resource import IntegrationRuntimeDebugResource

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeDebugResource from a JSON string
integration_runtime_debug_resource_instance = IntegrationRuntimeDebugResource.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeDebugResource.to_json())

# convert the object into a dict
integration_runtime_debug_resource_dict = integration_runtime_debug_resource_instance.to_dict()
# create an instance of IntegrationRuntimeDebugResource from a dict
integration_runtime_debug_resource_from_dict = IntegrationRuntimeDebugResource.from_dict(integration_runtime_debug_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


