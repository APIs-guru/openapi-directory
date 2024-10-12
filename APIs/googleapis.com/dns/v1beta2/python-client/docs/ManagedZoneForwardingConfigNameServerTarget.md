# ManagedZoneForwardingConfigNameServerTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarding_path** | **str** | Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on IP address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target. | [optional] 
**ipv4_address** | **str** | IPv4 address of a target name server. | [optional] 
**ipv6_address** | **str** | IPv6 address of a target name server. Does not accept both fields (ipv4 &amp; ipv6) being populated. Public preview as of November 2022. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZoneForwardingConfigNameServerTarget']

## Example

```python
from openapi_client.models.managed_zone_forwarding_config_name_server_target import ManagedZoneForwardingConfigNameServerTarget

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZoneForwardingConfigNameServerTarget from a JSON string
managed_zone_forwarding_config_name_server_target_instance = ManagedZoneForwardingConfigNameServerTarget.from_json(json)
# print the JSON string representation of the object
print(ManagedZoneForwardingConfigNameServerTarget.to_json())

# convert the object into a dict
managed_zone_forwarding_config_name_server_target_dict = managed_zone_forwarding_config_name_server_target_instance.to_dict()
# create an instance of ManagedZoneForwardingConfigNameServerTarget from a dict
managed_zone_forwarding_config_name_server_target_from_dict = ManagedZoneForwardingConfigNameServerTarget.from_dict(managed_zone_forwarding_config_name_server_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


