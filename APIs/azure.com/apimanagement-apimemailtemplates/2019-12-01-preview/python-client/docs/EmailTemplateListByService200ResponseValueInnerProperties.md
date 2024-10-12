# EmailTemplateListByService200ResponseValueInnerProperties

Email Template Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Email Template Body. This should be a valid XDocument | 
**description** | **str** | Description of the Email Template. | [optional] 
**is_default** | **bool** | Whether the template is the default template provided by Api Management or has been edited. | [optional] [readonly] 
**parameters** | [**List[EmailTemplateListByService200ResponseValueInnerPropertiesParametersInner]**](EmailTemplateListByService200ResponseValueInnerPropertiesParametersInner.md) | Email Template Parameter values. | [optional] 
**subject** | **str** | Subject of the Template. | 
**title** | **str** | Title of the Template. | [optional] 

## Example

```python
from openapi_client.models.email_template_list_by_service200_response_value_inner_properties import EmailTemplateListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateListByService200ResponseValueInnerProperties from a JSON string
email_template_list_by_service200_response_value_inner_properties_instance = EmailTemplateListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
email_template_list_by_service200_response_value_inner_properties_dict = email_template_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of EmailTemplateListByService200ResponseValueInnerProperties from a dict
email_template_list_by_service200_response_value_inner_properties_from_dict = EmailTemplateListByService200ResponseValueInnerProperties.from_dict(email_template_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


