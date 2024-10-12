# UpdatesProperties

The properties of the updates profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_update_in_progress** | **bool** | Indicates whether an update is in progress or not. | [optional] 
**last_updated_time** | **datetime** | The time when the last update was completed. | [optional] 
**maintenance_mode_updates_available** | **bool** | Set to &#39;true&#39; if maintenance mode update available. | [optional] 
**regular_updates_available** | **bool** | Set to &#39;true&#39; if regular updates are available for the device. | [optional] 

## Example

```python
from openapi_client.models.updates_properties import UpdatesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatesProperties from a JSON string
updates_properties_instance = UpdatesProperties.from_json(json)
# print the JSON string representation of the object
print(UpdatesProperties.to_json())

# convert the object into a dict
updates_properties_dict = updates_properties_instance.to_dict()
# create an instance of UpdatesProperties from a dict
updates_properties_from_dict = UpdatesProperties.from_dict(updates_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


