# ResourceProviderEndpoint

The API versions supported by the endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_versions** | **List[str]** | The API versions supported by the endpoint. | [optional] 
**enabled** | **bool** | The enabled. | [optional] 
**endpoint_uri** | **str** | The endpoint uri. | [optional] 
**timeout** | **str** | The timeout. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_endpoint import ResourceProviderEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderEndpoint from a JSON string
resource_provider_endpoint_instance = ResourceProviderEndpoint.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderEndpoint.to_json())

# convert the object into a dict
resource_provider_endpoint_dict = resource_provider_endpoint_instance.to_dict()
# create an instance of ResourceProviderEndpoint from a dict
resource_provider_endpoint_from_dict = ResourceProviderEndpoint.from_dict(resource_provider_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


