# ApplianceProviderAuthorization

The appliance provider authorization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The provider&#39;s principal identifier. This is the identity that the provider will use to call ARM to manage the appliance resources. | 
**role_definition_id** | **str** | The provider&#39;s role definition identifier. This role will define all the permissions that the provider must have on the appliance&#39;s container resource group. This role definition cannot have permission to delete the resource group. | 

## Example

```python
from openapi_client.models.appliance_provider_authorization import ApplianceProviderAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceProviderAuthorization from a JSON string
appliance_provider_authorization_instance = ApplianceProviderAuthorization.from_json(json)
# print the JSON string representation of the object
print(ApplianceProviderAuthorization.to_json())

# convert the object into a dict
appliance_provider_authorization_dict = appliance_provider_authorization_instance.to_dict()
# create an instance of ApplianceProviderAuthorization from a dict
appliance_provider_authorization_from_dict = ApplianceProviderAuthorization.from_dict(appliance_provider_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


