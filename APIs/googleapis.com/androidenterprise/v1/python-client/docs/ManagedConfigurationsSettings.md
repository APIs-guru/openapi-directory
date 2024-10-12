# ManagedConfigurationsSettings

A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated_timestamp_millis** | **str** | The last updated time of the managed configuration settings in milliseconds since 1970-01-01T00:00:00Z. | [optional] 
**mcm_id** | **str** | The ID of the managed configurations settings. | [optional] 
**name** | **str** | The name of the managed configurations settings. | [optional] 

## Example

```python
from openapi_client.models.managed_configurations_settings import ManagedConfigurationsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedConfigurationsSettings from a JSON string
managed_configurations_settings_instance = ManagedConfigurationsSettings.from_json(json)
# print the JSON string representation of the object
print(ManagedConfigurationsSettings.to_json())

# convert the object into a dict
managed_configurations_settings_dict = managed_configurations_settings_instance.to_dict()
# create an instance of ManagedConfigurationsSettings from a dict
managed_configurations_settings_from_dict = ManagedConfigurationsSettings.from_dict(managed_configurations_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


