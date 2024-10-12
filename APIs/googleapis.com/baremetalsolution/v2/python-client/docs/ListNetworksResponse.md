# ListNetworksResponse

Response message containing the list of networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networks** | [**List[Network]**](Network.md) | The list of networks. | [optional] 
**next_page_token** | **str** | A token identifying a page of results from the server. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_networks_response import ListNetworksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNetworksResponse from a JSON string
list_networks_response_instance = ListNetworksResponse.from_json(json)
# print the JSON string representation of the object
print(ListNetworksResponse.to_json())

# convert the object into a dict
list_networks_response_dict = list_networks_response_instance.to_dict()
# create an instance of ListNetworksResponse from a dict
list_networks_response_from_dict = ListNetworksResponse.from_dict(list_networks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


