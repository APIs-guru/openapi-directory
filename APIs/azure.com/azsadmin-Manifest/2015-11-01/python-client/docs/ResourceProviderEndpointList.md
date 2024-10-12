# ResourceProviderEndpointList

List of the resource provider endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[ResourceProviderEndpoint]**](ResourceProviderEndpoint.md) | List of the resource provider endpoints. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_endpoint_list import ResourceProviderEndpointList

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderEndpointList from a JSON string
resource_provider_endpoint_list_instance = ResourceProviderEndpointList.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderEndpointList.to_json())

# convert the object into a dict
resource_provider_endpoint_list_dict = resource_provider_endpoint_list_instance.to_dict()
# create an instance of ResourceProviderEndpointList from a dict
resource_provider_endpoint_list_from_dict = ResourceProviderEndpointList.from_dict(resource_provider_endpoint_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


