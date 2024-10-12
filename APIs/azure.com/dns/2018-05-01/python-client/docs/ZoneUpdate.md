# ZoneUpdate

Describes a request to update a DNS zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.zone_update import ZoneUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneUpdate from a JSON string
zone_update_instance = ZoneUpdate.from_json(json)
# print the JSON string representation of the object
print(ZoneUpdate.to_json())

# convert the object into a dict
zone_update_dict = zone_update_instance.to_dict()
# create an instance of ZoneUpdate from a dict
zone_update_from_dict = ZoneUpdate.from_dict(zone_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


