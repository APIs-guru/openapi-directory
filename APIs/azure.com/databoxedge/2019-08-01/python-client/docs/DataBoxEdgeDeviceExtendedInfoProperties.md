# DataBoxEdgeDeviceExtendedInfoProperties

The properties of the Data Box Edge/Gateway device extended info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_key** | **str** | The public part of the encryption certificate. Client uses this to encrypt any secret. | [optional] 
**encryption_key_thumbprint** | **str** | The digital signature of encrypted certificate. | [optional] 
**resource_key** | **str** | The Resource ID of the Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_edge_device_extended_info_properties import DataBoxEdgeDeviceExtendedInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxEdgeDeviceExtendedInfoProperties from a JSON string
data_box_edge_device_extended_info_properties_instance = DataBoxEdgeDeviceExtendedInfoProperties.from_json(json)
# print the JSON string representation of the object
print(DataBoxEdgeDeviceExtendedInfoProperties.to_json())

# convert the object into a dict
data_box_edge_device_extended_info_properties_dict = data_box_edge_device_extended_info_properties_instance.to_dict()
# create an instance of DataBoxEdgeDeviceExtendedInfoProperties from a dict
data_box_edge_device_extended_info_properties_from_dict = DataBoxEdgeDeviceExtendedInfoProperties.from_dict(data_box_edge_device_extended_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


