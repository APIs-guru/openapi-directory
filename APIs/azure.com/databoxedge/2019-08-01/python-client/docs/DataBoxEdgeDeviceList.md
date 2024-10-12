# DataBoxEdgeDeviceList

The collection of Data Box Edge/Gateway devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] [readonly] 
**value** | [**List[DataBoxEdgeDevice]**](DataBoxEdgeDevice.md) | The list of Data Box Edge/Gateway devices. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_edge_device_list import DataBoxEdgeDeviceList

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxEdgeDeviceList from a JSON string
data_box_edge_device_list_instance = DataBoxEdgeDeviceList.from_json(json)
# print the JSON string representation of the object
print(DataBoxEdgeDeviceList.to_json())

# convert the object into a dict
data_box_edge_device_list_dict = data_box_edge_device_list_instance.to_dict()
# create an instance of DataBoxEdgeDeviceList from a dict
data_box_edge_device_list_from_dict = DataBoxEdgeDeviceList.from_dict(data_box_edge_device_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


