# HostNameSslState

Object that represents a SSL-enabled host name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Host name | [optional] 
**ssl_state** | **str** | SSL type | 
**thumbprint** | **str** | SSL cert thumbprint | [optional] 
**to_update** | **bool** | Set this flag to update existing host name | [optional] 
**virtual_ip** | **str** | Virtual IP address assigned to the host name if IP based SSL is enabled | [optional] 

## Example

```python
from openapi_client.models.host_name_ssl_state import HostNameSslState

# TODO update the JSON string below
json = "{}"
# create an instance of HostNameSslState from a JSON string
host_name_ssl_state_instance = HostNameSslState.from_json(json)
# print the JSON string representation of the object
print(HostNameSslState.to_json())

# convert the object into a dict
host_name_ssl_state_dict = host_name_ssl_state_instance.to_dict()
# create an instance of HostNameSslState from a dict
host_name_ssl_state_from_dict = HostNameSslState.from_dict(host_name_ssl_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


