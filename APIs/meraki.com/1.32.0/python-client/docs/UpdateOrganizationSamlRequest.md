# UpdateOrganizationSamlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Boolean for updating SAML SSO enabled settings. | [optional] 

## Example

```python
from openapi_client.models.update_organization_saml_request import UpdateOrganizationSamlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSamlRequest from a JSON string
update_organization_saml_request_instance = UpdateOrganizationSamlRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSamlRequest.to_json())

# convert the object into a dict
update_organization_saml_request_dict = update_organization_saml_request_instance.to_dict()
# create an instance of UpdateOrganizationSamlRequest from a dict
update_organization_saml_request_from_dict = UpdateOrganizationSamlRequest.from_dict(update_organization_saml_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


