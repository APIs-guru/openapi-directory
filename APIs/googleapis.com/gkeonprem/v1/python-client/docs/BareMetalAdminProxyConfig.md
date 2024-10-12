# BareMetalAdminProxyConfig

BareMetalAdminProxyConfig specifies the cluster proxy configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**no_proxy** | **List[str]** | A list of IPs, hostnames, and domains that should skip the proxy. Examples: [\&quot;127.0.0.1\&quot;, \&quot;example.com\&quot;, \&quot;.corp\&quot;, \&quot;localhost\&quot;]. | [optional] 
**uri** | **str** | Required. Specifies the address of your proxy server. Examples: &#x60;http://domain&#x60; WARNING: Do not provide credentials in the format &#x60;http://(username:password@)domain&#x60; these will be rejected by the server. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_proxy_config import BareMetalAdminProxyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminProxyConfig from a JSON string
bare_metal_admin_proxy_config_instance = BareMetalAdminProxyConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminProxyConfig.to_json())

# convert the object into a dict
bare_metal_admin_proxy_config_dict = bare_metal_admin_proxy_config_instance.to_dict()
# create an instance of BareMetalAdminProxyConfig from a dict
bare_metal_admin_proxy_config_from_dict = BareMetalAdminProxyConfig.from_dict(bare_metal_admin_proxy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


