# IntegrationRuntimeResource

Integration runtime resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, object]** | Azure Data Factory nested object which serves as a compute resource for activities. | 
**etag** | **str** | Etag identifies change in the resource. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_runtime_resource import IntegrationRuntimeResource

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeResource from a JSON string
integration_runtime_resource_instance = IntegrationRuntimeResource.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeResource.to_json())

# convert the object into a dict
integration_runtime_resource_dict = integration_runtime_resource_instance.to_dict()
# create an instance of IntegrationRuntimeResource from a dict
integration_runtime_resource_from_dict = IntegrationRuntimeResource.from_dict(integration_runtime_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


