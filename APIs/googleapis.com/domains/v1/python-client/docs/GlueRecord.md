# GlueRecord

Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | Required. Domain name of the host in Punycode format. | [optional] 
**ipv4_addresses** | **List[str]** | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. &#x60;198.51.100.1&#x60;). At least one of &#x60;ipv4_address&#x60; and &#x60;ipv6_address&#x60; must be set. | [optional] 
**ipv6_addresses** | **List[str]** | List of IPv6 addresses corresponding to this host in the standard hexadecimal format (e.g. &#x60;2001:db8::&#x60;). At least one of &#x60;ipv4_address&#x60; and &#x60;ipv6_address&#x60; must be set. | [optional] 

## Example

```python
from openapi_client.models.glue_record import GlueRecord

# TODO update the JSON string below
json = "{}"
# create an instance of GlueRecord from a JSON string
glue_record_instance = GlueRecord.from_json(json)
# print the JSON string representation of the object
print(GlueRecord.to_json())

# convert the object into a dict
glue_record_dict = glue_record_instance.to_dict()
# create an instance of GlueRecord from a dict
glue_record_from_dict = GlueRecord.from_dict(glue_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


