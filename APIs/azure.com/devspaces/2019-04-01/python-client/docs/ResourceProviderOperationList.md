# ResourceProviderOperationList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next page for list of Azure operations. | [optional] [readonly] 
**value** | [**List[ResourceProviderOperationDefinition]**](ResourceProviderOperationDefinition.md) | Resource provider operations list. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_operation_list import ResourceProviderOperationList

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderOperationList from a JSON string
resource_provider_operation_list_instance = ResourceProviderOperationList.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderOperationList.to_json())

# convert the object into a dict
resource_provider_operation_list_dict = resource_provider_operation_list_instance.to_dict()
# create an instance of ResourceProviderOperationList from a dict
resource_provider_operation_list_from_dict = ResourceProviderOperationList.from_dict(resource_provider_operation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


