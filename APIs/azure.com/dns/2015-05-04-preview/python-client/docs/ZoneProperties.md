# ZoneProperties

Represents the properties of the zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_number_of_record_sets** | **int** | Gets or sets the maximum number of record sets that can be created in this zone. | [optional] 
**number_of_record_sets** | **int** | Gets or sets the current number of record sets in this zone. | [optional] 

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


