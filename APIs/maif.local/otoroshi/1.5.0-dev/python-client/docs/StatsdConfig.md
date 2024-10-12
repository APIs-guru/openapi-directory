# StatsdConfig

The configuration for statsd metrics push

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datadog** | **bool** | Datadog agent | 
**host** | **str** | The host of the StatsD agent | 
**port** | **int** | The port of the StatsD agent | 

## Example

```python
from openapi_client.models.statsd_config import StatsdConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StatsdConfig from a JSON string
statsd_config_instance = StatsdConfig.from_json(json)
# print the JSON string representation of the object
print(StatsdConfig.to_json())

# convert the object into a dict
statsd_config_dict = statsd_config_instance.to_dict()
# create an instance of StatsdConfig from a dict
statsd_config_from_dict = StatsdConfig.from_dict(statsd_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


