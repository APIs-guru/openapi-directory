# RecipientsContractProperties

Notification Parameter contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | List of Emails subscribed for the notification. | [optional] 
**users** | **List[str]** | List of Users subscribed for the notification. | [optional] 

## Example

```python
from openapi_client.models.recipients_contract_properties import RecipientsContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientsContractProperties from a JSON string
recipients_contract_properties_instance = RecipientsContractProperties.from_json(json)
# print the JSON string representation of the object
print(RecipientsContractProperties.to_json())

# convert the object into a dict
recipients_contract_properties_dict = recipients_contract_properties_instance.to_dict()
# create an instance of RecipientsContractProperties from a dict
recipients_contract_properties_from_dict = RecipientsContractProperties.from_dict(recipients_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


