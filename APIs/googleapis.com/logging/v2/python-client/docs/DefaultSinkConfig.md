# DefaultSinkConfig

Describes the custom _Default sink configuration that is used to override the built-in _Default sink configuration in newly created resource containers, such as projects or folders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusions** | [**List[LogExclusion]**](LogExclusion.md) | Optional. Specifies the set of exclusions to be added to the _Default sink in newly created resource containers. | [optional] 
**filter** | **str** | Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName&#x3D;\&quot;projects/[PROJECT_ID]/logs/[LOG_ID]\&quot; AND severity&gt;&#x3D;ERRORTo match all logs, don&#39;t add exclusions and use the following line as the value of filter:logName:*Cannot be empty or unset when the value of mode is OVERWRITE. | [optional] 
**mode** | **str** | Required. Determines the behavior to apply to the built-in _Default sink inclusion filter.Exclusions are always appended, as built-in _Default sinks have no exclusions. | [optional] 

## Example

```python
from openapi_client.models.default_sink_config import DefaultSinkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultSinkConfig from a JSON string
default_sink_config_instance = DefaultSinkConfig.from_json(json)
# print the JSON string representation of the object
print(DefaultSinkConfig.to_json())

# convert the object into a dict
default_sink_config_dict = default_sink_config_instance.to_dict()
# create an instance of DefaultSinkConfig from a dict
default_sink_config_from_dict = DefaultSinkConfig.from_dict(default_sink_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


