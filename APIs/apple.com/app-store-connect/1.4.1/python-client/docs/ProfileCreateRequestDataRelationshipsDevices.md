# ProfileCreateRequestDataRelationshipsDevices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ProfileRelationshipsDevicesDataInner]**](ProfileRelationshipsDevicesDataInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.profile_create_request_data_relationships_devices import ProfileCreateRequestDataRelationshipsDevices

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCreateRequestDataRelationshipsDevices from a JSON string
profile_create_request_data_relationships_devices_instance = ProfileCreateRequestDataRelationshipsDevices.from_json(json)
# print the JSON string representation of the object
print(ProfileCreateRequestDataRelationshipsDevices.to_json())

# convert the object into a dict
profile_create_request_data_relationships_devices_dict = profile_create_request_data_relationships_devices_instance.to_dict()
# create an instance of ProfileCreateRequestDataRelationshipsDevices from a dict
profile_create_request_data_relationships_devices_from_dict = ProfileCreateRequestDataRelationshipsDevices.from_dict(profile_create_request_data_relationships_devices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


