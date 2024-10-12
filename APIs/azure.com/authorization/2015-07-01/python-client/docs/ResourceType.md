# ResourceType

Resource Type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The resource type display name. | [optional] 
**name** | **str** | The resource type name. | [optional] 
**operations** | [**List[ProviderOperation]**](ProviderOperation.md) | The resource type operations. | [optional] 

## Example

```python
from openapi_client.models.resource_type import ResourceType

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceType from a JSON string
resource_type_instance = ResourceType.from_json(json)
# print the JSON string representation of the object
print(ResourceType.to_json())

# convert the object into a dict
resource_type_dict = resource_type_instance.to_dict()
# create an instance of ResourceType from a dict
resource_type_from_dict = ResourceType.from_dict(resource_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


