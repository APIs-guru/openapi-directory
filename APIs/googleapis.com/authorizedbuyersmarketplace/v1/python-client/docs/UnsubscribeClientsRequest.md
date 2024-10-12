# UnsubscribeClientsRequest

Request message for UnsubscribeAuctionPackage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | **List[str]** | Optional. A list of client buyers to unsubscribe from the auction package, with client buyer in the format &#x60;buyers/{accountId}/clients/{clientAccountId}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.unsubscribe_clients_request import UnsubscribeClientsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnsubscribeClientsRequest from a JSON string
unsubscribe_clients_request_instance = UnsubscribeClientsRequest.from_json(json)
# print the JSON string representation of the object
print(UnsubscribeClientsRequest.to_json())

# convert the object into a dict
unsubscribe_clients_request_dict = unsubscribe_clients_request_instance.to_dict()
# create an instance of UnsubscribeClientsRequest from a dict
unsubscribe_clients_request_from_dict = UnsubscribeClientsRequest.from_dict(unsubscribe_clients_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


