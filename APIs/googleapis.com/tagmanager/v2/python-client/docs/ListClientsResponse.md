# ListClientsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client** | [**List[Client]**](Client.md) | All GTM Clients of a GTM Container. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

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


