# ListCaPoolsResponse

Response message for CertificateAuthorityService.ListCaPools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_pools** | [**List[CaPool]**](CaPool.md) | The list of CaPools. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results. | [optional] 
**unreachable** | **List[str]** | A list of locations (e.g. \&quot;us-west1\&quot;) that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_ca_pools_response import ListCaPoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCaPoolsResponse from a JSON string
list_ca_pools_response_instance = ListCaPoolsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCaPoolsResponse.to_json())

# convert the object into a dict
list_ca_pools_response_dict = list_ca_pools_response_instance.to_dict()
# create an instance of ListCaPoolsResponse from a dict
list_ca_pools_response_from_dict = ListCaPoolsResponse.from_dict(list_ca_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


