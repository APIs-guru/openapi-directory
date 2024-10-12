# VpnSite

VpnSite Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**VpnSiteProperties**](VpnSiteProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vpn_site import VpnSite

# TODO update the JSON string below
json = "{}"
# create an instance of VpnSite from a JSON string
vpn_site_instance = VpnSite.from_json(json)
# print the JSON string representation of the object
print(VpnSite.to_json())

# convert the object into a dict
vpn_site_dict = vpn_site_instance.to_dict()
# create an instance of VpnSite from a dict
vpn_site_from_dict = VpnSite.from_dict(vpn_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


