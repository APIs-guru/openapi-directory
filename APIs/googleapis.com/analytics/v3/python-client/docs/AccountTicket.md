# AccountTicket

JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | [optional] 
**id** | **str** | Account ticket ID used to access the account ticket. | [optional] 
**kind** | **str** | Resource type for account ticket. | [optional] [default to 'analytics#accountTicket']
**profile** | [**Profile**](Profile.md) |  | [optional] 
**redirect_uri** | **str** | Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL. | [optional] 
**webproperty** | [**Webproperty**](Webproperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_ticket import AccountTicket

# TODO update the JSON string below
json = "{}"
# create an instance of AccountTicket from a JSON string
account_ticket_instance = AccountTicket.from_json(json)
# print the JSON string representation of the object
print(AccountTicket.to_json())

# convert the object into a dict
account_ticket_dict = account_ticket_instance.to_dict()
# create an instance of AccountTicket from a dict
account_ticket_from_dict = AccountTicket.from_dict(account_ticket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


