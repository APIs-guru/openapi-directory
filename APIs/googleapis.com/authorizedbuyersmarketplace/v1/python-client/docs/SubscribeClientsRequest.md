# SubscribeClientsRequest

Request message for SubscribeAuctionPackageClients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | **List[str]** | Optional. A list of client buyers to subscribe to the auction package, with client buyer in the format &#x60;buyers/{accountId}/clients/{clientAccountId}&#x60;. The current buyer will be subscribed to the auction package regardless of the list contents if not already. | [optional] 

## Example

```python
from openapi_client.models.subscribe_clients_request import SubscribeClientsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscribeClientsRequest from a JSON string
subscribe_clients_request_instance = SubscribeClientsRequest.from_json(json)
# print the JSON string representation of the object
print(SubscribeClientsRequest.to_json())

# convert the object into a dict
subscribe_clients_request_dict = subscribe_clients_request_instance.to_dict()
# create an instance of SubscribeClientsRequest from a dict
subscribe_clients_request_from_dict = SubscribeClientsRequest.from_dict(subscribe_clients_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


