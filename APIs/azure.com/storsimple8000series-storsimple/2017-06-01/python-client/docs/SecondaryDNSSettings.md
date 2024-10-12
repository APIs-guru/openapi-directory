# SecondaryDNSSettings

The secondary DNS settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secondary_dns_servers** | **List[str]** | The list of secondary DNS Server IP addresses. | [optional] 

## Example

```python
from openapi_client.models.secondary_dns_settings import SecondaryDNSSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SecondaryDNSSettings from a JSON string
secondary_dns_settings_instance = SecondaryDNSSettings.from_json(json)
# print the JSON string representation of the object
print(SecondaryDNSSettings.to_json())

# convert the object into a dict
secondary_dns_settings_dict = secondary_dns_settings_instance.to_dict()
# create an instance of SecondaryDNSSettings from a dict
secondary_dns_settings_from_dict = SecondaryDNSSettings.from_dict(secondary_dns_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


