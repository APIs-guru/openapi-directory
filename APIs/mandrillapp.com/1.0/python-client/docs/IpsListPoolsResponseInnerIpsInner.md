# IpsListPoolsResponseInnerIpsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**custom_dns** | [**IpInfoCustomDns**](IpInfoCustomDns.md) |  | [optional] 
**domain** | **str** |  | [optional] 
**ip** | **str** |  | [optional] 
**pool** | **str** |  | [optional] 
**warmup** | [**IpInfoWarmup**](IpInfoWarmup.md) |  | [optional] 

## Example

```python
from openapi_client.models.ips_list_pools_response_inner_ips_inner import IpsListPoolsResponseInnerIpsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IpsListPoolsResponseInnerIpsInner from a JSON string
ips_list_pools_response_inner_ips_inner_instance = IpsListPoolsResponseInnerIpsInner.from_json(json)
# print the JSON string representation of the object
print(IpsListPoolsResponseInnerIpsInner.to_json())

# convert the object into a dict
ips_list_pools_response_inner_ips_inner_dict = ips_list_pools_response_inner_ips_inner_instance.to_dict()
# create an instance of IpsListPoolsResponseInnerIpsInner from a dict
ips_list_pools_response_inner_ips_inner_from_dict = IpsListPoolsResponseInnerIpsInner.from_dict(ips_list_pools_response_inner_ips_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


