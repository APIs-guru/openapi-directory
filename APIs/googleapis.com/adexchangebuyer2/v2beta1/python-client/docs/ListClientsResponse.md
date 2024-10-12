# ListClientsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | [**List[Client]**](Client.md) | The returned list of clients. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the accounts.clients.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_clients_response import ListClientsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListClientsResponse from a JSON string
list_clients_response_instance = ListClientsResponse.from_json(json)
# print the JSON string representation of the object
print(ListClientsResponse.to_json())

# convert the object into a dict
list_clients_response_dict = list_clients_response_instance.to_dict()
# create an instance of ListClientsResponse from a dict
list_clients_response_from_dict = ListClientsResponse.from_dict(list_clients_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


