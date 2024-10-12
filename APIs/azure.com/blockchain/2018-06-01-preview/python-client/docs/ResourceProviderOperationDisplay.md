# ResourceProviderOperationDisplay

Operation display payload which is exposed in the response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the provider for display purposes. | [optional] 
**operation** | **str** | Gets or sets the name of the operation for display purposes. | [optional] 
**provider** | **str** | Gets or sets the name of the provider for display purposes. | [optional] 
**resource** | **str** | Gets or sets the name of the resource type for display purposes. | [optional] 

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


