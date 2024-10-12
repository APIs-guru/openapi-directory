# ListVpnSitesResult

Result of the request to list VpnSites. It contains a list of VpnSites and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[VpnSite]**](VpnSite.md) | List of VpnSites. | [optional] 

## Example

```python
from openapi_client.models.list_vpn_sites_result import ListVpnSitesResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListVpnSitesResult from a JSON string
list_vpn_sites_result_instance = ListVpnSitesResult.from_json(json)
# print the JSON string representation of the object
print(ListVpnSitesResult.to_json())

# convert the object into a dict
list_vpn_sites_result_dict = list_vpn_sites_result_instance.to_dict()
# create an instance of ListVpnSitesResult from a dict
list_vpn_sites_result_from_dict = ListVpnSitesResult.from_dict(list_vpn_sites_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


