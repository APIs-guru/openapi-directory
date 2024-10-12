# WindowsConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_automatic_updates** | **bool** | If omitted, the default value is true. | [optional] 

## Example

```python
from openapi_client.models.windows_configuration import WindowsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsConfiguration from a JSON string
windows_configuration_instance = WindowsConfiguration.from_json(json)
# print the JSON string representation of the object
print(WindowsConfiguration.to_json())

# convert the object into a dict
windows_configuration_dict = windows_configuration_instance.to_dict()
# create an instance of WindowsConfiguration from a dict
windows_configuration_from_dict = WindowsConfiguration.from_dict(windows_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


