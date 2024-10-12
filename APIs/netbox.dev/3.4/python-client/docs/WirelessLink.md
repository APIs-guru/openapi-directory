# WirelessLink


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
**id** | **int** |  | [optional] [readonly] 
**interface_a** | [**NestedInterface**](NestedInterface.md) |  | 
**interface_b** | [**NestedInterface**](NestedInterface.md) |  | 
**last_updated** | **datetime** |  | [optional] [readonly] 
**ssid** | **str** |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.wireless_link import WirelessLink

# TODO update the JSON string below
json = "{}"
# create an instance of WirelessLink from a JSON string
wireless_link_instance = WirelessLink.from_json(json)
# print the JSON string representation of the object
print(WirelessLink.to_json())

# convert the object into a dict
wireless_link_dict = wireless_link_instance.to_dict()
# create an instance of WirelessLink from a dict
wireless_link_from_dict = WirelessLink.from_dict(wireless_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


