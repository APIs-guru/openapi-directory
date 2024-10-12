# EmailTemplate

Template for an email template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Email body. | [optional] 
**format** | **str** | Email body format. | [optional] 
**var_from** | **str** | From address of the email. | [optional] 
**from_display_name** | **str** | From display name. | [optional] 
**reply_to** | **str** | Reply-to address. | [optional] 
**subject** | **str** | Subject of the email. | [optional] 

## Example

```python
from openapi_client.models.email_template import EmailTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplate from a JSON string
email_template_instance = EmailTemplate.from_json(json)
# print the JSON string representation of the object
print(EmailTemplate.to_json())

# convert the object into a dict
email_template_dict = email_template_instance.to_dict()
# create an instance of EmailTemplate from a dict
email_template_from_dict = EmailTemplate.from_dict(email_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


