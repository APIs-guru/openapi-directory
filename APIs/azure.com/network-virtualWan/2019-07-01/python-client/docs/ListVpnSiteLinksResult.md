# ListVpnSiteLinksResult

Result of the request to list VpnSiteLinks. It contains a list of VpnSiteLinks and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[VpnSiteLink]**](VpnSiteLink.md) | List of VpnSitesLinks. | [optional] 

## Example

```python
from openapi_client.models.list_vpn_site_links_result import ListVpnSiteLinksResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListVpnSiteLinksResult from a JSON string
list_vpn_site_links_result_instance = ListVpnSiteLinksResult.from_json(json)
# print the JSON string representation of the object
print(ListVpnSiteLinksResult.to_json())

# convert the object into a dict
list_vpn_site_links_result_dict = list_vpn_site_links_result_instance.to_dict()
# create an instance of ListVpnSiteLinksResult from a dict
list_vpn_site_links_result_from_dict = ListVpnSiteLinksResult.from_dict(list_vpn_site_links_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


