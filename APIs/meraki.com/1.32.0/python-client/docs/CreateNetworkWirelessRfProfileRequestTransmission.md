# CreateNetworkWirelessRfProfileRequestTransmission

Settings related to radio transmission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Toggle for radio transmission. When false, radios will not transmit at all. | [optional] 

## Example

```python
from openapi_client.models.create_network_wireless_rf_profile_request_transmission import CreateNetworkWirelessRfProfileRequestTransmission

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWirelessRfProfileRequestTransmission from a JSON string
create_network_wireless_rf_profile_request_transmission_instance = CreateNetworkWirelessRfProfileRequestTransmission.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWirelessRfProfileRequestTransmission.to_json())

# convert the object into a dict
create_network_wireless_rf_profile_request_transmission_dict = create_network_wireless_rf_profile_request_transmission_instance.to_dict()
# create an instance of CreateNetworkWirelessRfProfileRequestTransmission from a dict
create_network_wireless_rf_profile_request_transmission_from_dict = CreateNetworkWirelessRfProfileRequestTransmission.from_dict(create_network_wireless_rf_profile_request_transmission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


