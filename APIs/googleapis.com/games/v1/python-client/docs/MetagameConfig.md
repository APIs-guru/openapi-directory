# MetagameConfig

The metagame config resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_version** | **int** | Current version of the metagame configuration data. When this data is updated, the version number will be increased by one. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#metagameConfig&#x60;. | [optional] 
**player_levels** | [**List[PlayerLevel]**](PlayerLevel.md) | The list of player levels. | [optional] 

## Example

```python
from openapi_client.models.metagame_config import MetagameConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MetagameConfig from a JSON string
metagame_config_instance = MetagameConfig.from_json(json)
# print the JSON string representation of the object
print(MetagameConfig.to_json())

# convert the object into a dict
metagame_config_dict = metagame_config_instance.to_dict()
# create an instance of MetagameConfig from a dict
metagame_config_from_dict = MetagameConfig.from_dict(metagame_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


