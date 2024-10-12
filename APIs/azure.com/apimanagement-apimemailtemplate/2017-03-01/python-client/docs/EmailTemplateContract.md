# EmailTemplateContract

Email Template details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EmailTemplateContractProperties**](EmailTemplateContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.email_template_contract import EmailTemplateContract

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateContract from a JSON string
email_template_contract_instance = EmailTemplateContract.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateContract.to_json())

# convert the object into a dict
email_template_contract_dict = email_template_contract_instance.to_dict()
# create an instance of EmailTemplateContract from a dict
email_template_contract_from_dict = EmailTemplateContract.from_dict(email_template_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


