# EmailTemplateUpdateParameterProperties

Email Template Update Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Email Template Body. This should be a valid XDocument | [optional] 
**description** | **str** | Description of the Email Template. | [optional] 
**parameters** | [**List[EmailTemplateParametersContractProperties]**](EmailTemplateParametersContractProperties.md) | Email Template Parameter values. | [optional] 
**subject** | **str** | Subject of the Template. | [optional] 
**title** | **str** | Title of the Template. | [optional] 

## Example

```python
from openapi_client.models.email_template_update_parameter_properties import EmailTemplateUpdateParameterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateUpdateParameterProperties from a JSON string
email_template_update_parameter_properties_instance = EmailTemplateUpdateParameterProperties.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateUpdateParameterProperties.to_json())

# convert the object into a dict
email_template_update_parameter_properties_dict = email_template_update_parameter_properties_instance.to_dict()
# create an instance of EmailTemplateUpdateParameterProperties from a dict
email_template_update_parameter_properties_from_dict = EmailTemplateUpdateParameterProperties.from_dict(email_template_update_parameter_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


