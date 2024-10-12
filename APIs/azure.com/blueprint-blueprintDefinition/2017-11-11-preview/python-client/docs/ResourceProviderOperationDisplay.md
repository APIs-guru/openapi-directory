# ResourceProviderOperationDisplay

Display metadata associated with the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of this operation. | [optional] 
**operation** | **str** | Type of operation: get, read, delete, etc. | [optional] 
**provider** | **str** | Resource provider: Microsoft Blueprint. | [optional] 
**resource** | **str** | Resource on which the operation is performed. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_operation_display import ResourceProviderOperationDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderOperationDisplay from a JSON string
resource_provider_operation_display_instance = ResourceProviderOperationDisplay.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderOperationDisplay.to_json())

# convert the object into a dict
resource_provider_operation_display_dict = resource_provider_operation_display_instance.to_dict()
# create an instance of ResourceProviderOperationDisplay from a dict
resource_provider_operation_display_from_dict = ResourceProviderOperationDisplay.from_dict(resource_provider_operation_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


