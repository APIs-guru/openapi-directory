# GetNetworkSmDeviceCerts200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_pem** | **str** | The PEM of the certificate. | [optional] 
**device_id** | **str** | The Meraki managed device Id. | [optional] 
**id** | **str** | The Meraki Id of the certificate record. | [optional] 
**issuer** | **str** | The certificate issuer. | [optional] 
**name** | **str** | The name of the certificate. | [optional] 
**not_valid_after** | **str** | The date after which the certificate is no longer valid. | [optional] 
**not_valid_before** | **str** | The date before which the certificate is not valid. | [optional] 
**subject** | **str** | The subject of the certificate. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_certs200_response_inner import GetNetworkSmDeviceCerts200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceCerts200ResponseInner from a JSON string
get_network_sm_device_certs200_response_inner_instance = GetNetworkSmDeviceCerts200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceCerts200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_certs200_response_inner_dict = get_network_sm_device_certs200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceCerts200ResponseInner from a dict
get_network_sm_device_certs200_response_inner_from_dict = GetNetworkSmDeviceCerts200ResponseInner.from_dict(get_network_sm_device_certs200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


