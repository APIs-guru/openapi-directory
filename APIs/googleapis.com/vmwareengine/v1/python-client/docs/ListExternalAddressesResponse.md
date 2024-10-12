# ListExternalAddressesResponse

Response message for VmwareEngine.ListExternalAddresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_addresses** | [**List[ExternalAddress]**](ExternalAddress.md) | A list of external IP addresses. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached when making an aggregated query using wildcards. | [optional] 

## Example

```python
from openapi_client.models.list_external_addresses_response import ListExternalAddressesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListExternalAddressesResponse from a JSON string
list_external_addresses_response_instance = ListExternalAddressesResponse.from_json(json)
# print the JSON string representation of the object
print(ListExternalAddressesResponse.to_json())

# convert the object into a dict
list_external_addresses_response_dict = list_external_addresses_response_instance.to_dict()
# create an instance of ListExternalAddressesResponse from a dict
list_external_addresses_response_from_dict = ListExternalAddressesResponse.from_dict(list_external_addresses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


