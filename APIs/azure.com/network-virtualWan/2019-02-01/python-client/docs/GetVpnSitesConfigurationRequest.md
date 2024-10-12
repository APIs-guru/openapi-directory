# GetVpnSitesConfigurationRequest

List of Vpn-Sites

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_blob_sas_url** | **str** | The sas-url to download the configurations for vpn-sites | 
**vpn_sites** | **List[str]** | List of resource-ids of the vpn-sites for which config is to be downloaded. | [optional] 

## Example

```python
from openapi_client.models.get_vpn_sites_configuration_request import GetVpnSitesConfigurationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetVpnSitesConfigurationRequest from a JSON string
get_vpn_sites_configuration_request_instance = GetVpnSitesConfigurationRequest.from_json(json)
# print the JSON string representation of the object
print(GetVpnSitesConfigurationRequest.to_json())

# convert the object into a dict
get_vpn_sites_configuration_request_dict = get_vpn_sites_configuration_request_instance.to_dict()
# create an instance of GetVpnSitesConfigurationRequest from a dict
get_vpn_sites_configuration_request_from_dict = GetVpnSitesConfigurationRequest.from_dict(get_vpn_sites_configuration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


