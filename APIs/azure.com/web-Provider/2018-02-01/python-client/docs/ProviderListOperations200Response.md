# ProviderListOperations200Response

Collection of Azure resource manager operation metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ProviderListOperations200ResponseValueInner]**](ProviderListOperations200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.provider_list_operations200_response import ProviderListOperations200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderListOperations200Response from a JSON string
provider_list_operations200_response_instance = ProviderListOperations200Response.from_json(json)
# print the JSON string representation of the object
print(ProviderListOperations200Response.to_json())

# convert the object into a dict
provider_list_operations200_response_dict = provider_list_operations200_response_instance.to_dict()
# create an instance of ProviderListOperations200Response from a dict
provider_list_operations200_response_from_dict = ProviderListOperations200Response.from_dict(provider_list_operations200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


