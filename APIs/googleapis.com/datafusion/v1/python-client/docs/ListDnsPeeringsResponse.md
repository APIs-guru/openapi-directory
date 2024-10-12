# ListDnsPeeringsResponse

Response message for list DNS peerings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_peerings** | [**List[DnsPeering]**](DnsPeering.md) | List of dns peering. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_dns_peerings_response import ListDnsPeeringsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDnsPeeringsResponse from a JSON string
list_dns_peerings_response_instance = ListDnsPeeringsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDnsPeeringsResponse.to_json())

# convert the object into a dict
list_dns_peerings_response_dict = list_dns_peerings_response_instance.to_dict()
# create an instance of ListDnsPeeringsResponse from a dict
list_dns_peerings_response_from_dict = ListDnsPeeringsResponse.from_dict(list_dns_peerings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


