# AllowedIpRange

Allowed IP range with user-provided description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. User-provided description. It must contain at most 300 characters. | [optional] 
**value** | **str** | IP address or range, defined using CIDR notation, of requests that this rule applies to. Examples: &#x60;192.168.1.1&#x60; or &#x60;192.168.0.0/16&#x60; or &#x60;2001:db8::/32&#x60; or &#x60;2001:0db8:0000:0042:0000:8a2e:0370:7334&#x60;. IP range prefixes should be properly truncated. For example, &#x60;1.2.3.4/24&#x60; should be truncated to &#x60;1.2.3.0/24&#x60;. Similarly, for IPv6, &#x60;2001:db8::1/32&#x60; should be truncated to &#x60;2001:db8::/32&#x60;. | [optional] 

## Example

```python
from openapi_client.models.allowed_ip_range import AllowedIpRange

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedIpRange from a JSON string
allowed_ip_range_instance = AllowedIpRange.from_json(json)
# print the JSON string representation of the object
print(AllowedIpRange.to_json())

# convert the object into a dict
allowed_ip_range_dict = allowed_ip_range_instance.to_dict()
# create an instance of AllowedIpRange from a dict
allowed_ip_range_from_dict = AllowedIpRange.from_dict(allowed_ip_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


