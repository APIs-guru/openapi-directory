# OAuthConfigSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_o_auth_output_specification** | **object** | The values required to configure OAuth flows. The schema for this must match the &#x60;OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification&#x60; schema. | [optional] 
**complete_o_auth_server_input_specification** | **object** | The values required to configure OAuth flows. The schema for this must match the &#x60;OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification&#x60; schema. | [optional] 
**complete_o_auth_server_output_specification** | **object** | The values required to configure OAuth flows. The schema for this must match the &#x60;OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification&#x60; schema. | [optional] 
**oauth_user_input_from_connector_config_specification** | **object** | The values required to configure OAuth flows. The schema for this must match the &#x60;OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification&#x60; schema. | [optional] 

## Example

```python
from openapi_client.models.o_auth_config_specification import OAuthConfigSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthConfigSpecification from a JSON string
o_auth_config_specification_instance = OAuthConfigSpecification.from_json(json)
# print the JSON string representation of the object
print(OAuthConfigSpecification.to_json())

# convert the object into a dict
o_auth_config_specification_dict = o_auth_config_specification_instance.to_dict()
# create an instance of OAuthConfigSpecification from a dict
o_auth_config_specification_from_dict = OAuthConfigSpecification.from_dict(o_auth_config_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


