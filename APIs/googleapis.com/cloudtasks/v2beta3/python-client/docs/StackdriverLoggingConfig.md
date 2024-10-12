# StackdriverLoggingConfig

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sampling_ratio** | **float** | Specifies the fraction of operations to write to [Stackdriver Logging](https://cloud.google.com/logging/docs/). This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the default and means that no operations are logged. | [optional] 

## Example

```python
from openapi_client.models.stackdriver_logging_config import StackdriverLoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StackdriverLoggingConfig from a JSON string
stackdriver_logging_config_instance = StackdriverLoggingConfig.from_json(json)
# print the JSON string representation of the object
print(StackdriverLoggingConfig.to_json())

# convert the object into a dict
stackdriver_logging_config_dict = stackdriver_logging_config_instance.to_dict()
# create an instance of StackdriverLoggingConfig from a dict
stackdriver_logging_config_from_dict = StackdriverLoggingConfig.from_dict(stackdriver_logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


