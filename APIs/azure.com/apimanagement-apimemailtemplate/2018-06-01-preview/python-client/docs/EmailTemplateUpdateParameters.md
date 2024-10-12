# EmailTemplateUpdateParameters

Email Template update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EmailTemplateUpdateParameterProperties**](EmailTemplateUpdateParameterProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.email_template_update_parameters import EmailTemplateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateUpdateParameters from a JSON string
email_template_update_parameters_instance = EmailTemplateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateUpdateParameters.to_json())

# convert the object into a dict
email_template_update_parameters_dict = email_template_update_parameters_instance.to_dict()
# create an instance of EmailTemplateUpdateParameters from a dict
email_template_update_parameters_from_dict = EmailTemplateUpdateParameters.from_dict(email_template_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


