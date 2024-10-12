# RecipientUserContract

Recipient User details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecipientUsersContractProperties**](RecipientUsersContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recipient_user_contract import RecipientUserContract

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientUserContract from a JSON string
recipient_user_contract_instance = RecipientUserContract.from_json(json)
# print the JSON string representation of the object
print(RecipientUserContract.to_json())

# convert the object into a dict
recipient_user_contract_dict = recipient_user_contract_instance.to_dict()
# create an instance of RecipientUserContract from a dict
recipient_user_contract_from_dict = RecipientUserContract.from_dict(recipient_user_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


