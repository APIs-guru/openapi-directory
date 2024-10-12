# EmailTemplateListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**EmailTemplateListByServiceDefaultResponseError**](EmailTemplateListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.email_template_list_by_service_default_response import EmailTemplateListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateListByServiceDefaultResponse from a JSON string
email_template_list_by_service_default_response_instance = EmailTemplateListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateListByServiceDefaultResponse.to_json())

# convert the object into a dict
email_template_list_by_service_default_response_dict = email_template_list_by_service_default_response_instance.to_dict()
# create an instance of EmailTemplateListByServiceDefaultResponse from a dict
email_template_list_by_service_default_response_from_dict = EmailTemplateListByServiceDefaultResponse.from_dict(email_template_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


