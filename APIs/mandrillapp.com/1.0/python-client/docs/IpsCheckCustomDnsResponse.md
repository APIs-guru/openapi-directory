# IpsCheckCustomDnsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**valid** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.ips_check_custom_dns_response import IpsCheckCustomDnsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IpsCheckCustomDnsResponse from a JSON string
ips_check_custom_dns_response_instance = IpsCheckCustomDnsResponse.from_json(json)
# print the JSON string representation of the object
print(IpsCheckCustomDnsResponse.to_json())

# convert the object into a dict
ips_check_custom_dns_response_dict = ips_check_custom_dns_response_instance.to_dict()
# create an instance of IpsCheckCustomDnsResponse from a dict
ips_check_custom_dns_response_from_dict = IpsCheckCustomDnsResponse.from_dict(ips_check_custom_dns_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


