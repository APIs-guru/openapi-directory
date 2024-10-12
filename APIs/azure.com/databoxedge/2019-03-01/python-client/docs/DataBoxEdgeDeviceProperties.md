# DataBoxEdgeDeviceProperties

The properties of the Data Box Edge/Gateway device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configured_role_types** | **List[str]** | Type of compute roles configured. | [optional] [readonly] 
**culture** | **str** | The Data Box Edge/Gateway device culture. | [optional] [readonly] 
**data_box_edge_device_status** | **str** | The status of the Data Box Edge/Gateway device. | [optional] 
**description** | **str** | The Description of the Data Box Edge/Gateway device. | [optional] 
**device_hcs_version** | **str** | The device software version number of the device (eg: 1.2.18105.6). | [optional] [readonly] 
**device_local_capacity** | **int** | The Data Box Edge/Gateway device local capacity in MB. | [optional] [readonly] 
**device_model** | **str** | The Data Box Edge/Gateway device model. | [optional] [readonly] 
**device_software_version** | **str** | The Data Box Edge/Gateway device software version. | [optional] [readonly] 
**device_type** | **str** | The type of the Data Box Edge/Gateway device. | [optional] [readonly] 
**friendly_name** | **str** | The Data Box Edge/Gateway device name. | [optional] 
**model_description** | **str** | The description of the Data Box Edge/Gateway device model. | [optional] 
**serial_number** | **str** | The Serial Number of Data Box Edge/Gateway device. | [optional] [readonly] 
**time_zone** | **str** | The Data Box Edge/Gateway device timezone. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_edge_device_properties import DataBoxEdgeDeviceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxEdgeDeviceProperties from a JSON string
data_box_edge_device_properties_instance = DataBoxEdgeDeviceProperties.from_json(json)
# print the JSON string representation of the object
print(DataBoxEdgeDeviceProperties.to_json())

# convert the object into a dict
data_box_edge_device_properties_dict = data_box_edge_device_properties_instance.to_dict()
# create an instance of DataBoxEdgeDeviceProperties from a dict
data_box_edge_device_properties_from_dict = DataBoxEdgeDeviceProperties.from_dict(data_box_edge_device_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


