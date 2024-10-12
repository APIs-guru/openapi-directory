# ConfigVariableTemplate

ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code_link** | [**AuthorizationCodeLink**](AuthorizationCodeLink.md) |  | [optional] 
**description** | **str** | Description. | [optional] 
**display_name** | **str** | Display name of the parameter. | [optional] 
**enum_options** | [**List[EnumOption]**](EnumOption.md) | Enum options. To be populated if &#x60;ValueType&#x60; is &#x60;ENUM&#x60; | [optional] 
**is_advanced** | **bool** | Indicates if current template is part of advanced settings | [optional] 
**key** | **str** | Key of the config variable. | [optional] 
**location_type** | **str** | Optional. Location Tyep denotes where this value should be sent in BYOC connections. | [optional] 
**required** | **bool** | Flag represents that this &#x60;ConfigVariable&#x60; must be provided for a connection. | [optional] 
**required_condition** | [**LogicalExpression**](LogicalExpression.md) |  | [optional] 
**role_grant** | [**RoleGrant**](RoleGrant.md) |  | [optional] 
**state** | **str** | State of the config variable. | [optional] 
**validation_regex** | **str** | Regular expression in RE2 syntax used for validating the &#x60;value&#x60; of a &#x60;ConfigVariable&#x60;. | [optional] 
**value_type** | **str** | Type of the parameter: string, int, bool etc. consider custom type for the benefit for the validation. | [optional] 

## Example

```python
from openapi_client.models.config_variable_template import ConfigVariableTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigVariableTemplate from a JSON string
config_variable_template_instance = ConfigVariableTemplate.from_json(json)
# print the JSON string representation of the object
print(ConfigVariableTemplate.to_json())

# convert the object into a dict
config_variable_template_dict = config_variable_template_instance.to_dict()
# create an instance of ConfigVariableTemplate from a dict
config_variable_template_from_dict = ConfigVariableTemplate.from_dict(config_variable_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


