# AuthConfigTemplate

AuthConfigTemplate defines required field over an authentication type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_key** | **str** | Identifier key for auth config | [optional] 
**auth_type** | **str** | The type of authentication configured. | [optional] 
**config_variable_templates** | [**List[ConfigVariableTemplate]**](ConfigVariableTemplate.md) | Config variables to describe an &#x60;AuthConfig&#x60; for a &#x60;Connection&#x60;. | [optional] 
**description** | **str** | Connector specific description for an authentication template. | [optional] 
**display_name** | **str** | Display name for authentication template. | [optional] 

## Example

```python
from openapi_client.models.auth_config_template import AuthConfigTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of AuthConfigTemplate from a JSON string
auth_config_template_instance = AuthConfigTemplate.from_json(json)
# print the JSON string representation of the object
print(AuthConfigTemplate.to_json())

# convert the object into a dict
auth_config_template_dict = auth_config_template_instance.to_dict()
# create an instance of AuthConfigTemplate from a dict
auth_config_template_from_dict = AuthConfigTemplate.from_dict(auth_config_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


