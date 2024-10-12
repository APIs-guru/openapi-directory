# ManagedZoneServiceDirectoryConfigNamespace


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletion_time** | **str** | The time that the namespace backing this zone was deleted; an empty string if it still exists. This is in RFC3339 text format. Output only. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZoneServiceDirectoryConfigNamespace']
**namespace_url** | **str** | The fully qualified URL of the namespace associated with the zone. Format must be https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace} | [optional] 

## Example

```python
from openapi_client.models.managed_zone_service_directory_config_namespace import ManagedZoneServiceDirectoryConfigNamespace

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZoneServiceDirectoryConfigNamespace from a JSON string
managed_zone_service_directory_config_namespace_instance = ManagedZoneServiceDirectoryConfigNamespace.from_json(json)
# print the JSON string representation of the object
print(ManagedZoneServiceDirectoryConfigNamespace.to_json())

# convert the object into a dict
managed_zone_service_directory_config_namespace_dict = managed_zone_service_directory_config_namespace_instance.to_dict()
# create an instance of ManagedZoneServiceDirectoryConfigNamespace from a dict
managed_zone_service_directory_config_namespace_from_dict = ManagedZoneServiceDirectoryConfigNamespace.from_dict(managed_zone_service_directory_config_namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


