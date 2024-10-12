# EmailTemplateCreateOrUpdateRequestProperties

Email Template Update Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Email Template Body. This should be a valid XDocument | [optional] 
**description** | **str** | Description of the Email Template. | [optional] 
**parameters** | [**List[EmailTemplateListByService200ResponseValueInnerPropertiesParametersInner]**](EmailTemplateListByService200ResponseValueInnerPropertiesParametersInner.md) | Email Template Parameter values. | [optional] 
**subject** | **str** | Subject of the Template. | [optional] 
**title** | **str** | Title of the Template. | [optional] 

## Example

```python
from openapi_client.models.email_template_create_or_update_request_properties import EmailTemplateCreateOrUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateCreateOrUpdateRequestProperties from a JSON string
email_template_create_or_update_request_properties_instance = EmailTemplateCreateOrUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateCreateOrUpdateRequestProperties.to_json())

# convert the object into a dict
email_template_create_or_update_request_properties_dict = email_template_create_or_update_request_properties_instance.to_dict()
# create an instance of EmailTemplateCreateOrUpdateRequestProperties from a dict
email_template_create_or_update_request_properties_from_dict = EmailTemplateCreateOrUpdateRequestProperties.from_dict(email_template_create_or_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


