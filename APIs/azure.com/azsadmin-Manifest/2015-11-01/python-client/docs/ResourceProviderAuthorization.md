# ResourceProviderAuthorization

The resource provider authorization information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The application id of resource provider in AAD. | [optional] 
**role_definition_id** | **str** | The role definition identifier against which a role assignment is created. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_authorization import ResourceProviderAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderAuthorization from a JSON string
resource_provider_authorization_instance = ResourceProviderAuthorization.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderAuthorization.to_json())

# convert the object into a dict
resource_provider_authorization_dict = resource_provider_authorization_instance.to_dict()
# create an instance of ResourceProviderAuthorization from a dict
resource_provider_authorization_from_dict = ResourceProviderAuthorization.from_dict(resource_provider_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


