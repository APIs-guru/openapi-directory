# EmailTemplateListByService200Response

Paged email template list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[EmailTemplateListByService200ResponseValueInner]**](EmailTemplateListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.email_template_list_by_service200_response import EmailTemplateListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateListByService200Response from a JSON string
email_template_list_by_service200_response_instance = EmailTemplateListByService200Response.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateListByService200Response.to_json())

# convert the object into a dict
email_template_list_by_service200_response_dict = email_template_list_by_service200_response_instance.to_dict()
# create an instance of EmailTemplateListByService200Response from a dict
email_template_list_by_service200_response_from_dict = EmailTemplateListByService200Response.from_dict(email_template_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


