# WritableWirelessLink


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
**id** | **int** |  | [optional] [readonly] 
**interface_a** | **int** |  | 
**interface_b** | **int** |  | 
**last_updated** | **datetime** |  | [optional] [readonly] 
**ssid** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_wireless_link import WritableWirelessLink

# TODO update the JSON string below
json = "{}"
# create an instance of WritableWirelessLink from a JSON string
writable_wireless_link_instance = WritableWirelessLink.from_json(json)
# print the JSON string representation of the object
print(WritableWirelessLink.to_json())

# convert the object into a dict
writable_wireless_link_dict = writable_wireless_link_instance.to_dict()
# create an instance of WritableWirelessLink from a dict
writable_wireless_link_from_dict = WritableWirelessLink.from_dict(writable_wireless_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


