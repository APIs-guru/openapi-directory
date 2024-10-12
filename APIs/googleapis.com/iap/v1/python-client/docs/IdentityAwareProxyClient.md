# IdentityAwareProxyClient

Contains the data that describes an Identity Aware Proxy owned client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Human-friendly name given to the OAuth client. | [optional] 
**name** | **str** | Output only. Unique identifier of the OAuth client. | [optional] [readonly] 
**secret** | **str** | Output only. Client secret of the OAuth client. | [optional] [readonly] 

## Example

```python
from openapi_client.models.identity_aware_proxy_client import IdentityAwareProxyClient

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityAwareProxyClient from a JSON string
identity_aware_proxy_client_instance = IdentityAwareProxyClient.from_json(json)
# print the JSON string representation of the object
print(IdentityAwareProxyClient.to_json())

# convert the object into a dict
identity_aware_proxy_client_dict = identity_aware_proxy_client_instance.to_dict()
# create an instance of IdentityAwareProxyClient from a dict
identity_aware_proxy_client_from_dict = IdentityAwareProxyClient.from_dict(identity_aware_proxy_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


