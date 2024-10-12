# StatefulHAConfig

Configuration for the Stateful HA add-on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the Stateful HA add-on is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.stateful_ha_config import StatefulHAConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulHAConfig from a JSON string
stateful_ha_config_instance = StatefulHAConfig.from_json(json)
# print the JSON string representation of the object
print(StatefulHAConfig.to_json())

# convert the object into a dict
stateful_ha_config_dict = stateful_ha_config_instance.to_dict()
# create an instance of StatefulHAConfig from a dict
stateful_ha_config_from_dict = StatefulHAConfig.from_dict(stateful_ha_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


