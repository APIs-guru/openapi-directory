# IosRuntimeConfiguration

iOS configuration that can be selected at the time a test is run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locales** | [**List[Locale]**](Locale.md) | The set of available locales. | [optional] 
**orientations** | [**List[Orientation]**](Orientation.md) | The set of available orientations. | [optional] 

## Example

```python
from openapi_client.models.ios_runtime_configuration import IosRuntimeConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of IosRuntimeConfiguration from a JSON string
ios_runtime_configuration_instance = IosRuntimeConfiguration.from_json(json)
# print the JSON string representation of the object
print(IosRuntimeConfiguration.to_json())

# convert the object into a dict
ios_runtime_configuration_dict = ios_runtime_configuration_instance.to_dict()
# create an instance of IosRuntimeConfiguration from a dict
ios_runtime_configuration_from_dict = IosRuntimeConfiguration.from_dict(ios_runtime_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


