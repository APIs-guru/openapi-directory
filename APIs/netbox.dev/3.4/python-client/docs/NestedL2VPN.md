# NestedL2VPN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**identifier** | **int** |  | [optional] 
**name** | **str** |  | 
**slug** | **str** |  | 
**type** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_l2_vpn import NestedL2VPN

# TODO update the JSON string below
json = "{}"
# create an instance of NestedL2VPN from a JSON string
nested_l2_vpn_instance = NestedL2VPN.from_json(json)
# print the JSON string representation of the object
print(NestedL2VPN.to_json())

# convert the object into a dict
nested_l2_vpn_dict = nested_l2_vpn_instance.to_dict()
# create an instance of NestedL2VPN from a dict
nested_l2_vpn_from_dict = NestedL2VPN.from_dict(nested_l2_vpn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


