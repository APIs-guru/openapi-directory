# WirelessLAN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_cipher** | [**AuthCipher**](AuthCipher.md) |  | [optional] 
**auth_psk** | **str** |  | [optional] 
**auth_type** | [**AuthType**](AuthType.md) |  | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**group** | [**NestedWirelessLANGroup**](NestedWirelessLANGroup.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**ssid** | **str** |  | 
**status** | [**Status12**](Status12.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vlan** | [**NestedVLAN**](NestedVLAN.md) |  | [optional] 

## Example

```python
from openapi_client.models.wireless_lan import WirelessLAN

# TODO update the JSON string below
json = "{}"
# create an instance of WirelessLAN from a JSON string
wireless_lan_instance = WirelessLAN.from_json(json)
# print the JSON string representation of the object
print(WirelessLAN.to_json())

# convert the object into a dict
wireless_lan_dict = wireless_lan_instance.to_dict()
# create an instance of WirelessLAN from a dict
wireless_lan_from_dict = WirelessLAN.from_dict(wireless_lan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


