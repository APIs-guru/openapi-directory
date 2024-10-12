# EmailTemplateGet200Response

Email Template details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EmailTemplateListByService200ResponseValueInnerProperties**](EmailTemplateListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.email_template_get200_response import EmailTemplateGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateGet200Response from a JSON string
email_template_get200_response_instance = EmailTemplateGet200Response.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateGet200Response.to_json())

# convert the object into a dict
email_template_get200_response_dict = email_template_get200_response_instance.to_dict()
# create an instance of EmailTemplateGet200Response from a dict
email_template_get200_response_from_dict = EmailTemplateGet200Response.from_dict(email_template_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


