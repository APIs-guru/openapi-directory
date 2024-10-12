# LoggingComponentConfig

LoggingComponentConfig is cluster logging component configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_components** | **List[str]** | Select components to collect logs. An empty set would disable all logging. | [optional] 

## Example

```python
from openapi_client.models.logging_component_config import LoggingComponentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LoggingComponentConfig from a JSON string
logging_component_config_instance = LoggingComponentConfig.from_json(json)
# print the JSON string representation of the object
print(LoggingComponentConfig.to_json())

# convert the object into a dict
logging_component_config_dict = logging_component_config_instance.to_dict()
# create an instance of LoggingComponentConfig from a dict
logging_component_config_from_dict = LoggingComponentConfig.from_dict(logging_component_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


