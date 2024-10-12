# CreateOrganizationSamlRoleRequestNetworksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | The privilege of the SAML administrator on the network. Can be one of &#39;full&#39;, &#39;read-only&#39;, &#39;guest-ambassador&#39;, &#39;monitor-only&#39; or &#39;ssid-admin&#39; | 
**id** | **str** | The network ID | 

## Example

```python
from openapi_client.models.create_organization_saml_role_request_networks_inner import CreateOrganizationSamlRoleRequestNetworksInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationSamlRoleRequestNetworksInner from a JSON string
create_organization_saml_role_request_networks_inner_instance = CreateOrganizationSamlRoleRequestNetworksInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationSamlRoleRequestNetworksInner.to_json())

# convert the object into a dict
create_organization_saml_role_request_networks_inner_dict = create_organization_saml_role_request_networks_inner_instance.to_dict()
# create an instance of CreateOrganizationSamlRoleRequestNetworksInner from a dict
create_organization_saml_role_request_networks_inner_from_dict = CreateOrganizationSamlRoleRequestNetworksInner.from_dict(create_organization_saml_role_request_networks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


