# ProxyInfo

Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_hosts** | **List[str]** | For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com. | [optional] 
**host** | **str** | The host of the direct proxy. | [optional] 
**pac_uri** | **str** | The URI of the PAC script used to configure the proxy. | [optional] 
**port** | **int** | The port of the direct proxy. | [optional] 

## Example

```python
from openapi_client.models.proxy_info import ProxyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProxyInfo from a JSON string
proxy_info_instance = ProxyInfo.from_json(json)
# print the JSON string representation of the object
print(ProxyInfo.to_json())

# convert the object into a dict
proxy_info_dict = proxy_info_instance.to_dict()
# create an instance of ProxyInfo from a dict
proxy_info_from_dict = ProxyInfo.from_dict(proxy_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


