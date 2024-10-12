# ProfileRelationshipsDevices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ProfileRelationshipsDevicesDataInner]**](ProfileRelationshipsDevicesDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.profile_relationships_devices import ProfileRelationshipsDevices

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileRelationshipsDevices from a JSON string
profile_relationships_devices_instance = ProfileRelationshipsDevices.from_json(json)
# print the JSON string representation of the object
print(ProfileRelationshipsDevices.to_json())

# convert the object into a dict
profile_relationships_devices_dict = profile_relationships_devices_instance.to_dict()
# create an instance of ProfileRelationshipsDevices from a dict
profile_relationships_devices_from_dict = ProfileRelationshipsDevices.from_dict(profile_relationships_devices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


