# IpInfoCustomDns


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 
**error** | **str** |  | [optional] 
**valid** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.ip_info_custom_dns import IpInfoCustomDns

# TODO update the JSON string below
json = "{}"
# create an instance of IpInfoCustomDns from a JSON string
ip_info_custom_dns_instance = IpInfoCustomDns.from_json(json)
# print the JSON string representation of the object
print(IpInfoCustomDns.to_json())

# convert the object into a dict
ip_info_custom_dns_dict = ip_info_custom_dns_instance.to_dict()
# create an instance of IpInfoCustomDns from a dict
ip_info_custom_dns_from_dict = IpInfoCustomDns.from_dict(ip_info_custom_dns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


