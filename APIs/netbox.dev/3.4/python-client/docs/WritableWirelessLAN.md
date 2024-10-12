# WritableWirelessLAN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_cipher** | **str** |  | [optional] 
**auth_psk** | **str** |  | [optional] 
**auth_type** | **str** |  | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**group** | **int** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**ssid** | **str** |  | 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vlan** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_wireless_lan import WritableWirelessLAN

# TODO update the JSON string below
json = "{}"
# create an instance of WritableWirelessLAN from a JSON string
writable_wireless_lan_instance = WritableWirelessLAN.from_json(json)
# print the JSON string representation of the object
print(WritableWirelessLAN.to_json())

# convert the object into a dict
writable_wireless_lan_dict = writable_wireless_lan_instance.to_dict()
# create an instance of WritableWirelessLAN from a dict
writable_wireless_lan_from_dict = WritableWirelessLAN.from_dict(writable_wireless_lan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


