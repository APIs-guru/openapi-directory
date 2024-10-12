# IpSecurityRestriction

Represents an ip security restriction on a web app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | IP address the security restriction is valid for | [optional] 
**subnet_mask** | **str** | Subnet mask for the range of IP addresses the restriction is valid for | [optional] 

## Example

```python
from openapi_client.models.ip_security_restriction import IpSecurityRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of IpSecurityRestriction from a JSON string
ip_security_restriction_instance = IpSecurityRestriction.from_json(json)
# print the JSON string representation of the object
print(IpSecurityRestriction.to_json())

# convert the object into a dict
ip_security_restriction_dict = ip_security_restriction_instance.to_dict()
# create an instance of IpSecurityRestriction from a dict
ip_security_restriction_from_dict = IpSecurityRestriction.from_dict(ip_security_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


