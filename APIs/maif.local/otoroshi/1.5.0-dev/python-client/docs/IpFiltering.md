# IpFiltering

The filtering configuration block for a service of globally.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blacklist** | **List[str]** | Blacklisted IP addresses | 
**whitelist** | **List[str]** | Whitelisted IP addresses | 

## Example

```python
from openapi_client.models.ip_filtering import IpFiltering

# TODO update the JSON string below
json = "{}"
# create an instance of IpFiltering from a JSON string
ip_filtering_instance = IpFiltering.from_json(json)
# print the JSON string representation of the object
print(IpFiltering.to_json())

# convert the object into a dict
ip_filtering_dict = ip_filtering_instance.to_dict()
# create an instance of IpFiltering from a dict
ip_filtering_from_dict = IpFiltering.from_dict(ip_filtering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


