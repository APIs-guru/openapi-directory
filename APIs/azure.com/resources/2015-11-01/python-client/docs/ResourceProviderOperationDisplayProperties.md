# ResourceProviderOperationDisplayProperties

Resource provider operation's display properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets operation description. | [optional] 
**operation** | **str** | Gets or sets operation. | [optional] 
**provider** | **str** | Gets or sets operation provider. | [optional] 
**publisher** | **str** | Gets or sets operation description. | [optional] 
**resource** | **str** | Gets or sets operation resource. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_operation_display_properties import ResourceProviderOperationDisplayProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderOperationDisplayProperties from a JSON string
resource_provider_operation_display_properties_instance = ResourceProviderOperationDisplayProperties.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderOperationDisplayProperties.to_json())

# convert the object into a dict
resource_provider_operation_display_properties_dict = resource_provider_operation_display_properties_instance.to_dict()
# create an instance of ResourceProviderOperationDisplayProperties from a dict
resource_provider_operation_display_properties_from_dict = ResourceProviderOperationDisplayProperties.from_dict(resource_provider_operation_display_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


