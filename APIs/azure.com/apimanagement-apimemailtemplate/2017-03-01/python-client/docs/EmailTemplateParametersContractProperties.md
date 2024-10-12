# EmailTemplateParametersContractProperties

Email Template Parameter contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Template parameter description. | [optional] 
**name** | **str** | Template parameter name. | [optional] 
**title** | **str** | Template parameter title. | [optional] 

## Example

```python
from openapi_client.models.email_template_parameters_contract_properties import EmailTemplateParametersContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateParametersContractProperties from a JSON string
email_template_parameters_contract_properties_instance = EmailTemplateParametersContractProperties.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateParametersContractProperties.to_json())

# convert the object into a dict
email_template_parameters_contract_properties_dict = email_template_parameters_contract_properties_instance.to_dict()
# create an instance of EmailTemplateParametersContractProperties from a dict
email_template_parameters_contract_properties_from_dict = EmailTemplateParametersContractProperties.from_dict(email_template_parameters_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


