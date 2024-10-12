# DataBoxEdgeDeviceExtendedInfo

The extended Info of the Data Box Edge/Gateway device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataBoxEdgeDeviceExtendedInfoProperties**](DataBoxEdgeDeviceExtendedInfoProperties.md) |  | [optional] 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**name** | **str** | The object name. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_edge_device_extended_info import DataBoxEdgeDeviceExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxEdgeDeviceExtendedInfo from a JSON string
data_box_edge_device_extended_info_instance = DataBoxEdgeDeviceExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(DataBoxEdgeDeviceExtendedInfo.to_json())

# convert the object into a dict
data_box_edge_device_extended_info_dict = data_box_edge_device_extended_info_instance.to_dict()
# create an instance of DataBoxEdgeDeviceExtendedInfo from a dict
data_box_edge_device_extended_info_from_dict = DataBoxEdgeDeviceExtendedInfo.from_dict(data_box_edge_device_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


