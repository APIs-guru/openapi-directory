# ManagedZone

A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_logging_config** | [**ManagedZoneCloudLoggingConfig**](ManagedZoneCloudLoggingConfig.md) |  | [optional] 
**creation_time** | **str** | The time that this resource was created on the server. This is in RFC3339 text format. Output only. | [optional] 
**description** | **str** | A mutable string of at most 1024 characters associated with this resource for the user&#39;s convenience. Has no effect on the managed zone&#39;s function. | [optional] 
**dns_name** | **str** | The DNS name of this managed zone, for instance \&quot;example.com.\&quot;. | [optional] 
**dnssec_config** | [**ManagedZoneDnsSecConfig**](ManagedZoneDnsSecConfig.md) |  | [optional] 
**forwarding_config** | [**ManagedZoneForwardingConfig**](ManagedZoneForwardingConfig.md) |  | [optional] 
**id** | **str** | Unique identifier for the resource; defined by the server (output only) | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZone']
**labels** | **Dict[str, str]** | User labels. | [optional] 
**name** | **str** | User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. | [optional] 
**name_server_set** | **str** | Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users leave this field unset. If you need to use this field, contact your account team. | [optional] 
**name_servers** | **List[str]** | Delegate your managed_zone to these virtual name servers; defined by the server (output only) | [optional] 
**peering_config** | [**ManagedZonePeeringConfig**](ManagedZonePeeringConfig.md) |  | [optional] 
**private_visibility_config** | [**ManagedZonePrivateVisibilityConfig**](ManagedZonePrivateVisibilityConfig.md) |  | [optional] 
**reverse_lookup_config** | [**ManagedZoneReverseLookupConfig**](ManagedZoneReverseLookupConfig.md) |  | [optional] 
**service_directory_config** | [**ManagedZoneServiceDirectoryConfig**](ManagedZoneServiceDirectoryConfig.md) |  | [optional] 
**visibility** | **str** | The zone&#39;s visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. | [optional] 

## Example

```python
from openapi_client.models.managed_zone import ManagedZone

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZone from a JSON string
managed_zone_instance = ManagedZone.from_json(json)
# print the JSON string representation of the object
print(ManagedZone.to_json())

# convert the object into a dict
managed_zone_dict = managed_zone_instance.to_dict()
# create an instance of ManagedZone from a dict
managed_zone_from_dict = ManagedZone.from_dict(managed_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


