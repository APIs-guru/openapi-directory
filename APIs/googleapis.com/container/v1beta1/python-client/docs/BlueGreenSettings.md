# BlueGreenSettings

Settings for blue-green upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaled_rollout_policy** | **object** | Autoscaled rollout policy uses cluster autoscaler during blue-green upgrades to scale both the green and blue pools. | [optional] 
**node_pool_soak_duration** | **str** | Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. | [optional] 
**standard_rollout_policy** | [**StandardRolloutPolicy**](StandardRolloutPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.blue_green_settings import BlueGreenSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BlueGreenSettings from a JSON string
blue_green_settings_instance = BlueGreenSettings.from_json(json)
# print the JSON string representation of the object
print(BlueGreenSettings.to_json())

# convert the object into a dict
blue_green_settings_dict = blue_green_settings_instance.to_dict()
# create an instance of BlueGreenSettings from a dict
blue_green_settings_from_dict = BlueGreenSettings.from_dict(blue_green_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


