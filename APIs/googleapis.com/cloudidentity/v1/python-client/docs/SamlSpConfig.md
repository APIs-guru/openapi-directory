# SamlSpConfig

SAML SP (service provider) configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assertion_consumer_service_uri** | **str** | Output only. The SAML **Assertion Consumer Service (ACS) URL** to be used for the IDP-initiated login. Assumed to accept response messages via the &#x60;HTTP-POST&#x60; binding. | [optional] [readonly] 
**entity_id** | **str** | Output only. The SAML **Entity ID** for this service provider. | [optional] [readonly] 

## Example

```python
from openapi_client.models.saml_sp_config import SamlSpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SamlSpConfig from a JSON string
saml_sp_config_instance = SamlSpConfig.from_json(json)
# print the JSON string representation of the object
print(SamlSpConfig.to_json())

# convert the object into a dict
saml_sp_config_dict = saml_sp_config_instance.to_dict()
# create an instance of SamlSpConfig from a dict
saml_sp_config_from_dict = SamlSpConfig.from_dict(saml_sp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


