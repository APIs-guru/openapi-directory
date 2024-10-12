# DeviceIpBlockCatalog

List of IP blocks used by the Firebase Test Lab

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_blocks** | [**List[DeviceIpBlock]**](DeviceIpBlock.md) | The device IP blocks used by Firebase Test Lab | [optional] 

## Example

```python
from openapi_client.models.device_ip_block_catalog import DeviceIpBlockCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceIpBlockCatalog from a JSON string
device_ip_block_catalog_instance = DeviceIpBlockCatalog.from_json(json)
# print the JSON string representation of the object
print(DeviceIpBlockCatalog.to_json())

# convert the object into a dict
device_ip_block_catalog_dict = device_ip_block_catalog_instance.to_dict()
# create an instance of DeviceIpBlockCatalog from a dict
device_ip_block_catalog_from_dict = DeviceIpBlockCatalog.from_dict(device_ip_block_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


