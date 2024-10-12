# IpInfo


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
from openapi_client.models.ip_info import IpInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IpInfo from a JSON string
ip_info_instance = IpInfo.from_json(json)
# print the JSON string representation of the object
print(IpInfo.to_json())

# convert the object into a dict
ip_info_dict = ip_info_instance.to_dict()
# create an instance of IpInfo from a dict
ip_info_from_dict = IpInfo.from_dict(ip_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


