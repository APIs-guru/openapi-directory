# ConfigureDnsSettingsRequest

Request for the `ConfigureDnsSettings` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**DnsSettings**](DnsSettings.md) |  | [optional] 
**update_mask** | **str** | Required. The field mask describing which fields to update as a comma-separated list. For example, if only the name servers are being updated for an existing Custom DNS configuration, the &#x60;update_mask&#x60; is &#x60;\&quot;custom_dns.name_servers\&quot;&#x60;. When changing the DNS provider from one type to another, pass the new provider&#39;s field name as part of the field mask. For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the &#x60;update_mask&#x60; is &#x60;\&quot;custom_dns\&quot;&#x60;. // | [optional] 
**validate_only** | **bool** | Validate the request without actually updating the DNS settings. | [optional] 

## Example

```python
from openapi_client.models.configure_dns_settings_request import ConfigureDnsSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigureDnsSettingsRequest from a JSON string
configure_dns_settings_request_instance = ConfigureDnsSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(ConfigureDnsSettingsRequest.to_json())

# convert the object into a dict
configure_dns_settings_request_dict = configure_dns_settings_request_instance.to_dict()
# create an instance of ConfigureDnsSettingsRequest from a dict
configure_dns_settings_request_from_dict = ConfigureDnsSettingsRequest.from_dict(configure_dns_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


