# ListPeeringsResponse

ListPeeringsResponse is the response message for ListPeerings method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**peerings** | [**List[Peering]**](Peering.md) | A list of Managed Identities Service Peerings in the project. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_peerings_response import ListPeeringsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPeeringsResponse from a JSON string
list_peerings_response_instance = ListPeeringsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPeeringsResponse.to_json())

# convert the object into a dict
list_peerings_response_dict = list_peerings_response_instance.to_dict()
# create an instance of ListPeeringsResponse from a dict
list_peerings_response_from_dict = ListPeeringsResponse.from_dict(list_peerings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


