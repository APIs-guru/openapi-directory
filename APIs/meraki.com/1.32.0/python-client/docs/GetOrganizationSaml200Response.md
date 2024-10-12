# GetOrganizationSaml200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Toggle depicting if SAML SSO settings are enabled | [optional] 

## Example

```python
from openapi_client.models.get_organization_saml200_response import GetOrganizationSaml200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSaml200Response from a JSON string
get_organization_saml200_response_instance = GetOrganizationSaml200Response.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSaml200Response.to_json())

# convert the object into a dict
get_organization_saml200_response_dict = get_organization_saml200_response_instance.to_dict()
# create an instance of GetOrganizationSaml200Response from a dict
get_organization_saml200_response_from_dict = GetOrganizationSaml200Response.from_dict(get_organization_saml200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


