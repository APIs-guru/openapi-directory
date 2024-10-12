# CreateLinkedIntegrationRuntimeRequest

The linked integration runtime information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_factory_location** | **str** | The location of the data factory that the linked integration runtime belongs to. | [optional] 
**data_factory_name** | **str** | The name of the data factory that the linked integration runtime belongs to. | [optional] 
**name** | **str** | The name of the linked integration runtime. | [optional] 
**subscription_id** | **str** | The ID of the subscription that the linked integration runtime belongs to. | [optional] 

## Example

```python
from openapi_client.models.create_linked_integration_runtime_request import CreateLinkedIntegrationRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLinkedIntegrationRuntimeRequest from a JSON string
create_linked_integration_runtime_request_instance = CreateLinkedIntegrationRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(CreateLinkedIntegrationRuntimeRequest.to_json())

# convert the object into a dict
create_linked_integration_runtime_request_dict = create_linked_integration_runtime_request_instance.to_dict()
# create an instance of CreateLinkedIntegrationRuntimeRequest from a dict
create_linked_integration_runtime_request_from_dict = CreateLinkedIntegrationRuntimeRequest.from_dict(create_linked_integration_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


