# VpnSiteLink

VpnSiteLink Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**VpnSiteLinkProperties**](VpnSiteLinkProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.vpn_site_link import VpnSiteLink

# TODO update the JSON string below
json = "{}"
# create an instance of VpnSiteLink from a JSON string
vpn_site_link_instance = VpnSiteLink.from_json(json)
# print the JSON string representation of the object
print(VpnSiteLink.to_json())

# convert the object into a dict
vpn_site_link_dict = vpn_site_link_instance.to_dict()
# create an instance of VpnSiteLink from a dict
vpn_site_link_from_dict = VpnSiteLink.from_dict(vpn_site_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


