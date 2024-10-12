# TunnelInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tunnel_dst_address** | **str** | Destination address of the tunnel. | 
**tunnel_specific_data** | **str** |  | [optional] 
**tunnel_src_address** | **str** | Source address of the tunnel. | 
**tunnel_type** | [**TunnelType**](TunnelType.md) |  | 

## Example

```python
from openapi_client.models.tunnel_info import TunnelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TunnelInfo from a JSON string
tunnel_info_instance = TunnelInfo.from_json(json)
# print the JSON string representation of the object
print(TunnelInfo.to_json())

# convert the object into a dict
tunnel_info_dict = tunnel_info_instance.to_dict()
# create an instance of TunnelInfo from a dict
tunnel_info_from_dict = TunnelInfo.from_dict(tunnel_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


