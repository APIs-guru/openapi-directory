# SupportedOSProperties

Properties model for supported OS API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supported_os_list** | [**List[SupportedOSProperty]**](SupportedOSProperty.md) | The supported OS List. | [optional] 

## Example

```python
from openapi_client.models.supported_os_properties import SupportedOSProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedOSProperties from a JSON string
supported_os_properties_instance = SupportedOSProperties.from_json(json)
# print the JSON string representation of the object
print(SupportedOSProperties.to_json())

# convert the object into a dict
supported_os_properties_dict = supported_os_properties_instance.to_dict()
# create an instance of SupportedOSProperties from a dict
supported_os_properties_from_dict = SupportedOSProperties.from_dict(supported_os_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


