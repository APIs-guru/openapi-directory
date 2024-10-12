# EmailTemplateCreateOrUpdateRequest

Email Template update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EmailTemplateCreateOrUpdateRequestProperties**](EmailTemplateCreateOrUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.email_template_create_or_update_request import EmailTemplateCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateCreateOrUpdateRequest from a JSON string
email_template_create_or_update_request_instance = EmailTemplateCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateCreateOrUpdateRequest.to_json())

# convert the object into a dict
email_template_create_or_update_request_dict = email_template_create_or_update_request_instance.to_dict()
# create an instance of EmailTemplateCreateOrUpdateRequest from a dict
email_template_create_or_update_request_from_dict = EmailTemplateCreateOrUpdateRequest.from_dict(email_template_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


