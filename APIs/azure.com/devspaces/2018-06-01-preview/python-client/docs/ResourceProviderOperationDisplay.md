# ResourceProviderOperationDisplay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the resource provider operation. | [optional] 
**operation** | **str** | Name of the resource provider operation. | [optional] 
**provider** | **str** | Name of the resource provider. | [optional] 
**resource** | **str** | Name of the resource type. | [optional] 

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


