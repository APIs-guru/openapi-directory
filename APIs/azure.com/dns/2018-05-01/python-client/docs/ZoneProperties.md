# ZoneProperties

Represents the properties of the zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_number_of_record_sets** | **int** | The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**name_servers** | **List[str]** | The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**number_of_record_sets** | **int** | The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored. | [optional] [readonly] 
**registration_virtual_networks** | [**List[SubResource]**](SubResource.md) | A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private. | [optional] 
**resolution_virtual_networks** | [**List[SubResource]**](SubResource.md) | A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private. | [optional] 
**zone_type** | **str** | The type of this DNS zone (Public or Private). | [optional] [default to 'Public']

## Example

```python
from openapi_client.models.zone_properties import ZoneProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneProperties from a JSON string
zone_properties_instance = ZoneProperties.from_json(json)
# print the JSON string representation of the object
print(ZoneProperties.to_json())

# convert the object into a dict
zone_properties_dict = zone_properties_instance.to_dict()
# create an instance of ZoneProperties from a dict
zone_properties_from_dict = ZoneProperties.from_dict(zone_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


