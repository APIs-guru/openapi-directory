# UpdateOrganizationSamlRole200ResponseNetworksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | The privilege of the SAML administrator on the network | [optional] 
**id** | **str** | The network ID | [optional] 

## Example

```python
from openapi_client.models.update_organization_saml_role200_response_networks_inner import UpdateOrganizationSamlRole200ResponseNetworksInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSamlRole200ResponseNetworksInner from a JSON string
update_organization_saml_role200_response_networks_inner_instance = UpdateOrganizationSamlRole200ResponseNetworksInner.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSamlRole200ResponseNetworksInner.to_json())

# convert the object into a dict
update_organization_saml_role200_response_networks_inner_dict = update_organization_saml_role200_response_networks_inner_instance.to_dict()
# create an instance of UpdateOrganizationSamlRole200ResponseNetworksInner from a dict
update_organization_saml_role200_response_networks_inner_from_dict = UpdateOrganizationSamlRole200ResponseNetworksInner.from_dict(update_organization_saml_role200_response_networks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


