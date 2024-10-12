# RecipientUsersContractProperties

Recipient User Contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | API Management UserId subscribed to notification. | [optional] 

## Example

```python
from openapi_client.models.recipient_users_contract_properties import RecipientUsersContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientUsersContractProperties from a JSON string
recipient_users_contract_properties_instance = RecipientUsersContractProperties.from_json(json)
# print the JSON string representation of the object
print(RecipientUsersContractProperties.to_json())

# convert the object into a dict
recipient_users_contract_properties_dict = recipient_users_contract_properties_instance.to_dict()
# create an instance of RecipientUsersContractProperties from a dict
recipient_users_contract_properties_from_dict = RecipientUsersContractProperties.from_dict(recipient_users_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


