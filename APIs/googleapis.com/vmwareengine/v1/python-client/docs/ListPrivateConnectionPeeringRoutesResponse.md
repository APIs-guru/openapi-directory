# ListPrivateConnectionPeeringRoutesResponse

Response message for VmwareEngine.ListPrivateConnectionPeeringRoutes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**peering_routes** | [**List[PeeringRoute]**](PeeringRoute.md) | A list of peering routes. | [optional] 

## Example

```python
from openapi_client.models.list_private_connection_peering_routes_response import ListPrivateConnectionPeeringRoutesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPrivateConnectionPeeringRoutesResponse from a JSON string
list_private_connection_peering_routes_response_instance = ListPrivateConnectionPeeringRoutesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPrivateConnectionPeeringRoutesResponse.to_json())

# convert the object into a dict
list_private_connection_peering_routes_response_dict = list_private_connection_peering_routes_response_instance.to_dict()
# create an instance of ListPrivateConnectionPeeringRoutesResponse from a dict
list_private_connection_peering_routes_response_from_dict = ListPrivateConnectionPeeringRoutesResponse.from_dict(list_private_connection_peering_routes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


