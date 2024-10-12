# WirelessWirelessLanGroupsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[WirelessLANGroup]**](WirelessLANGroup.md) |  | 

## Example

```python
from openapi_client.models.wireless_wireless_lan_groups_list200_response import WirelessWirelessLanGroupsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WirelessWirelessLanGroupsList200Response from a JSON string
wireless_wireless_lan_groups_list200_response_instance = WirelessWirelessLanGroupsList200Response.from_json(json)
# print the JSON string representation of the object
print(WirelessWirelessLanGroupsList200Response.to_json())

# convert the object into a dict
wireless_wireless_lan_groups_list200_response_dict = wireless_wireless_lan_groups_list200_response_instance.to_dict()
# create an instance of WirelessWirelessLanGroupsList200Response from a dict
wireless_wireless_lan_groups_list200_response_from_dict = WirelessWirelessLanGroupsList200Response.from_dict(wireless_wireless_lan_groups_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


