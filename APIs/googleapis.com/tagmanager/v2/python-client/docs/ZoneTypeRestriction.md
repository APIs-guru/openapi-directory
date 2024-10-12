# ZoneTypeRestriction

Represents a Zone's type restrictions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **bool** | True if type restrictions have been enabled for this Zone. | [optional] 
**whitelisted_type_id** | **List[str]** | List of type public ids that have been whitelisted for use in this Zone. | [optional] 

## Example

```python
from openapi_client.models.zone_type_restriction import ZoneTypeRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneTypeRestriction from a JSON string
zone_type_restriction_instance = ZoneTypeRestriction.from_json(json)
# print the JSON string representation of the object
print(ZoneTypeRestriction.to_json())

# convert the object into a dict
zone_type_restriction_dict = zone_type_restriction_instance.to_dict()
# create an instance of ZoneTypeRestriction from a dict
zone_type_restriction_from_dict = ZoneTypeRestriction.from_dict(zone_type_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


