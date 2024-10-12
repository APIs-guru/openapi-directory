# ApplicationProviderAuthorization

The managed application provider authorization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The provider&#39;s principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources. | 
**role_definition_id** | **str** | The provider&#39;s role definition identifier. This role will define all the permissions that the provider must have on the managed application&#39;s container resource group. This role definition cannot have permission to delete the resource group. | 

## Example

```python
from openapi_client.models.application_provider_authorization import ApplicationProviderAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationProviderAuthorization from a JSON string
application_provider_authorization_instance = ApplicationProviderAuthorization.from_json(json)
# print the JSON string representation of the object
print(ApplicationProviderAuthorization.to_json())

# convert the object into a dict
application_provider_authorization_dict = application_provider_authorization_instance.to_dict()
# create an instance of ApplicationProviderAuthorization from a dict
application_provider_authorization_from_dict = ApplicationProviderAuthorization.from_dict(application_provider_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


