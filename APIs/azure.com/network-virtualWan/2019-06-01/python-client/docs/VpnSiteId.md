# VpnSiteId

VpnSite Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpn_site** | **str** | The resource-uri of the vpn-site for which config is to be fetched. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vpn_site_id import VpnSiteId

# TODO update the JSON string below
json = "{}"
# create an instance of VpnSiteId from a JSON string
vpn_site_id_instance = VpnSiteId.from_json(json)
# print the JSON string representation of the object
print(VpnSiteId.to_json())

# convert the object into a dict
vpn_site_id_dict = vpn_site_id_instance.to_dict()
# create an instance of VpnSiteId from a dict
vpn_site_id_from_dict = VpnSiteId.from_dict(vpn_site_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


