# NamedLogConfiguration



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | [**LogLevel**](LogLevel.md) |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.named_log_configuration import NamedLogConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of NamedLogConfiguration from a JSON string
named_log_configuration_instance = NamedLogConfiguration.from_json(json)
# print the JSON string representation of the object
print(NamedLogConfiguration.to_json())

# convert the object into a dict
named_log_configuration_dict = named_log_configuration_instance.to_dict()
# create an instance of NamedLogConfiguration from a dict
named_log_configuration_from_dict = NamedLogConfiguration.from_dict(named_log_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


