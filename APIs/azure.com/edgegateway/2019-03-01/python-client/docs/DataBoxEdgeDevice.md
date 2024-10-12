# DataBoxEdgeDevice

The Data Box Edge/Gateway device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The etag for the devices. | [optional] 
**location** | **str** | The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed. | 
**properties** | [**DataBoxEdgeDeviceProperties**](DataBoxEdgeDeviceProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | The list of tags that describe the device. These tags can be used to view and group this device (across resource groups). | [optional] 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**name** | **str** | The object name. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_edge_device import DataBoxEdgeDevice

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxEdgeDevice from a JSON string
data_box_edge_device_instance = DataBoxEdgeDevice.from_json(json)
# print the JSON string representation of the object
print(DataBoxEdgeDevice.to_json())

# convert the object into a dict
data_box_edge_device_dict = data_box_edge_device_instance.to_dict()
# create an instance of DataBoxEdgeDevice from a dict
data_box_edge_device_from_dict = DataBoxEdgeDevice.from_dict(data_box_edge_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


