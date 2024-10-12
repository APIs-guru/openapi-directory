# LogConfiguration



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | [**LogLevel**](LogLevel.md) |  | 

## Example

```python
from openapi_client.models.log_configuration import LogConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of LogConfiguration from a JSON string
log_configuration_instance = LogConfiguration.from_json(json)
# print the JSON string representation of the object
print(LogConfiguration.to_json())

# convert the object into a dict
log_configuration_dict = log_configuration_instance.to_dict()
# create an instance of LogConfiguration from a dict
log_configuration_from_dict = LogConfiguration.from_dict(log_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


