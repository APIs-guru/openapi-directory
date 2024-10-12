# RecipientEmailContractProperties

Recipient Email Contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | User Email subscribed to notification. | [optional] 

## Example

```python
from openapi_client.models.recipient_email_contract_properties import RecipientEmailContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientEmailContractProperties from a JSON string
recipient_email_contract_properties_instance = RecipientEmailContractProperties.from_json(json)
# print the JSON string representation of the object
print(RecipientEmailContractProperties.to_json())

# convert the object into a dict
recipient_email_contract_properties_dict = recipient_email_contract_properties_instance.to_dict()
# create an instance of RecipientEmailContractProperties from a dict
recipient_email_contract_properties_from_dict = RecipientEmailContractProperties.from_dict(recipient_email_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


