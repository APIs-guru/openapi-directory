# LinkedIntegrationRuntimeRequest

Data factory name for linked integration runtime request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factory_name** | **str** | The data factory name for linked integration runtime. | 

## Example

```python
from openapi_client.models.linked_integration_runtime_request import LinkedIntegrationRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedIntegrationRuntimeRequest from a JSON string
linked_integration_runtime_request_instance = LinkedIntegrationRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(LinkedIntegrationRuntimeRequest.to_json())

# convert the object into a dict
linked_integration_runtime_request_dict = linked_integration_runtime_request_instance.to_dict()
# create an instance of LinkedIntegrationRuntimeRequest from a dict
linked_integration_runtime_request_from_dict = LinkedIntegrationRuntimeRequest.from_dict(linked_integration_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


