# ReplicationProviderSpecificSettings

Replication provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the Instance type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.replication_provider_specific_settings import ReplicationProviderSpecificSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationProviderSpecificSettings from a JSON string
replication_provider_specific_settings_instance = ReplicationProviderSpecificSettings.from_json(json)
# print the JSON string representation of the object
print(ReplicationProviderSpecificSettings.to_json())

# convert the object into a dict
replication_provider_specific_settings_dict = replication_provider_specific_settings_instance.to_dict()
# create an instance of ReplicationProviderSpecificSettings from a dict
replication_provider_specific_settings_from_dict = ReplicationProviderSpecificSettings.from_dict(replication_provider_specific_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


