# UpdateNetworkWirelessSsidRequestGreConcentrator

The EoGRE concentrator's settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The EoGRE concentrator&#39;s IP or FQDN. This param is required when ipAssignmentMode is &#39;Ethernet over GRE&#39;. | 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_gre_concentrator import UpdateNetworkWirelessSsidRequestGreConcentrator

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestGreConcentrator from a JSON string
update_network_wireless_ssid_request_gre_concentrator_instance = UpdateNetworkWirelessSsidRequestGreConcentrator.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestGreConcentrator.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_gre_concentrator_dict = update_network_wireless_ssid_request_gre_concentrator_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestGreConcentrator from a dict
update_network_wireless_ssid_request_gre_concentrator_from_dict = UpdateNetworkWirelessSsidRequestGreConcentrator.from_dict(update_network_wireless_ssid_request_gre_concentrator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


