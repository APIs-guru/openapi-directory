# LoggingConfig

LoggingConfig is cluster logging configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_config** | [**LoggingComponentConfig**](LoggingComponentConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.logging_config import LoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LoggingConfig from a JSON string
logging_config_instance = LoggingConfig.from_json(json)
# print the JSON string representation of the object
print(LoggingConfig.to_json())

# convert the object into a dict
logging_config_dict = logging_config_instance.to_dict()
# create an instance of LoggingConfig from a dict
logging_config_from_dict = LoggingConfig.from_dict(logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


