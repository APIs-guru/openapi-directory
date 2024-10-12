# ListAdClientsResponse

Response definition for the ad client list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_clients** | [**List[AdClient]**](AdClient.md) | The ad clients returned in this list response. | [optional] 
**next_page_token** | **str** | Continuation token used to page through ad clients. To retrieve the next page of the results, set the next request&#39;s \&quot;page_token\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.list_ad_clients_response import ListAdClientsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdClientsResponse from a JSON string
list_ad_clients_response_instance = ListAdClientsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdClientsResponse.to_json())

# convert the object into a dict
list_ad_clients_response_dict = list_ad_clients_response_instance.to_dict()
# create an instance of ListAdClientsResponse from a dict
list_ad_clients_response_from_dict = ListAdClientsResponse.from_dict(list_ad_clients_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


