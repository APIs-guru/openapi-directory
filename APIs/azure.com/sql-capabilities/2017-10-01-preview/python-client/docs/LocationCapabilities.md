# LocationCapabilities

The location capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The location name. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_managed_instance_versions** | [**List[ManagedInstanceVersionCapability]**](ManagedInstanceVersionCapability.md) | The list of supported managed instance versions. | [optional] [readonly] 
**supported_server_versions** | [**List[ServerVersionCapability]**](ServerVersionCapability.md) | The list of supported server versions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.location_capabilities import LocationCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of LocationCapabilities from a JSON string
location_capabilities_instance = LocationCapabilities.from_json(json)
# print the JSON string representation of the object
print(LocationCapabilities.to_json())

# convert the object into a dict
location_capabilities_dict = location_capabilities_instance.to_dict()
# create an instance of LocationCapabilities from a dict
location_capabilities_from_dict = LocationCapabilities.from_dict(location_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


