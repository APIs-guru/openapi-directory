# HanaInstanceProperties

Describes the properties of a HANA instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hana_instance_id** | **str** | Specifies the HANA instance unique ID. | [optional] [readonly] 
**hardware_profile** | [**HardwareProfile**](HardwareProfile.md) |  | [optional] 
**hw_revision** | **str** | Hardware revision of a HANA instance | [optional] [readonly] 
**network_profile** | [**NetworkProfile**](NetworkProfile.md) |  | [optional] 
**os_profile** | [**OSProfile**](OSProfile.md) |  | [optional] 
**partner_node_id** | **str** | ARM ID of another HanaInstance that will share a network with this HanaInstance | [optional] 
**power_state** | **str** | Resource power state | [optional] [readonly] 
**provisioning_state** | **str** | State of provisioning of the HanaInstance | [optional] [readonly] 
**proximity_placement_group** | **str** | Resource proximity placement group | [optional] [readonly] 
**storage_profile** | [**StorageProfile**](StorageProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.hana_instance_properties import HanaInstanceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HanaInstanceProperties from a JSON string
hana_instance_properties_instance = HanaInstanceProperties.from_json(json)
# print the JSON string representation of the object
print(HanaInstanceProperties.to_json())

# convert the object into a dict
hana_instance_properties_dict = hana_instance_properties_instance.to_dict()
# create an instance of HanaInstanceProperties from a dict
hana_instance_properties_from_dict = HanaInstanceProperties.from_dict(hana_instance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


