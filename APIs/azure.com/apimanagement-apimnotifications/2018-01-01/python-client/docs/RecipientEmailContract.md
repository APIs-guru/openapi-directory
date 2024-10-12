# RecipientEmailContract

Recipient Email details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecipientEmailContractProperties**](RecipientEmailContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recipient_email_contract import RecipientEmailContract

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientEmailContract from a JSON string
recipient_email_contract_instance = RecipientEmailContract.from_json(json)
# print the JSON string representation of the object
print(RecipientEmailContract.to_json())

# convert the object into a dict
recipient_email_contract_dict = recipient_email_contract_instance.to_dict()
# create an instance of RecipientEmailContract from a dict
recipient_email_contract_from_dict = RecipientEmailContract.from_dict(recipient_email_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


