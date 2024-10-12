# PrivateZoneProperties

Represents the properties of the Private DNS zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_number_of_record_sets** | **int** | The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**max_number_of_virtual_network_links** | **int** | The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**max_number_of_virtual_network_links_with_registration** | **int** | The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**number_of_record_sets** | **int** | The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**number_of_virtual_network_links** | **int** | The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**number_of_virtual_network_links_with_registration** | **int** | The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_zone_properties import PrivateZoneProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateZoneProperties from a JSON string
private_zone_properties_instance = PrivateZoneProperties.from_json(json)
# print the JSON string representation of the object
print(PrivateZoneProperties.to_json())

# convert the object into a dict
private_zone_properties_dict = private_zone_properties_instance.to_dict()
# create an instance of PrivateZoneProperties from a dict
private_zone_properties_from_dict = PrivateZoneProperties.from_dict(private_zone_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


