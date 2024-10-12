# AvailableUpdates

Holds informatiom about the available versions for upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_place_update** | [**ApplianceVersion**](ApplianceVersion.md) |  | [optional] 
**new_deployable_appliance** | [**ApplianceVersion**](ApplianceVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.available_updates import AvailableUpdates

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableUpdates from a JSON string
available_updates_instance = AvailableUpdates.from_json(json)
# print the JSON string representation of the object
print(AvailableUpdates.to_json())

# convert the object into a dict
available_updates_dict = available_updates_instance.to_dict()
# create an instance of AvailableUpdates from a dict
available_updates_from_dict = AvailableUpdates.from_dict(available_updates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


