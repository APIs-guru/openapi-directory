# NestedL2VPNTermination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn** | [**NestedL2VPN**](NestedL2VPN.md) |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_l2_vpn_termination import NestedL2VPNTermination

# TODO update the JSON string below
json = "{}"
# create an instance of NestedL2VPNTermination from a JSON string
nested_l2_vpn_termination_instance = NestedL2VPNTermination.from_json(json)
# print the JSON string representation of the object
print(NestedL2VPNTermination.to_json())

# convert the object into a dict
nested_l2_vpn_termination_dict = nested_l2_vpn_termination_instance.to_dict()
# create an instance of NestedL2VPNTermination from a dict
nested_l2_vpn_termination_from_dict = NestedL2VPNTermination.from_dict(nested_l2_vpn_termination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


