# SAMLParams

Message storing SAML params to enable Google as IDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | SAML certificate | [optional] 
**email_mapping** | **str** | IdP field that maps to the user’s email address | [optional] 
**entity_id** | **str** | Entity id URL | [optional] 
**sso_uri** | **str** | Single sign-on URL | [optional] 
**user_email** | **str** | Email address of the first admin users. | [optional] 

## Example

```python
from openapi_client.models.saml_params import SAMLParams

# TODO update the JSON string below
json = "{}"
# create an instance of SAMLParams from a JSON string
saml_params_instance = SAMLParams.from_json(json)
# print the JSON string representation of the object
print(SAMLParams.to_json())

# convert the object into a dict
saml_params_dict = saml_params_instance.to_dict()
# create an instance of SAMLParams from a dict
saml_params_from_dict = SAMLParams.from_dict(saml_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


