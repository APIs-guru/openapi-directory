# LoggingConfig

The runtime logging config of the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver_log_levels** | **Dict[str, str]** | The per-package log levels for the driver. This can include \&quot;root\&quot; package name to configure rootLogger. Examples: - &#39;com.google &#x3D; FATAL&#39; - &#39;root &#x3D; INFO&#39; - &#39;org.apache &#x3D; DEBUG&#39; | [optional] 

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


