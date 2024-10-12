# MachinePropertiesLocationData

Metadata pertaining to the geographic location of the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The city or locality where the resource is located. | [optional] 
**country_or_region** | **str** | The country or region where the resource is located | [optional] 
**district** | **str** | The district, state, or province where the resource is located. | [optional] 
**name** | **str** | A canonical name for the geographic or physical location. | 

## Example

```python
from openapi_client.models.machine_properties_location_data import MachinePropertiesLocationData

# TODO update the JSON string below
json = "{}"
# create an instance of MachinePropertiesLocationData from a JSON string
machine_properties_location_data_instance = MachinePropertiesLocationData.from_json(json)
# print the JSON string representation of the object
print(MachinePropertiesLocationData.to_json())

# convert the object into a dict
machine_properties_location_data_dict = machine_properties_location_data_instance.to_dict()
# create an instance of MachinePropertiesLocationData from a dict
machine_properties_location_data_from_dict = MachinePropertiesLocationData.from_dict(machine_properties_location_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


