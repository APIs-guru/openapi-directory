# AudienceDevicePropertiesListResult

List of device properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **Dict[str, str]** | List of device properties. | 

## Example

```python
from openapi_client.models.audience_device_properties_list_result import AudienceDevicePropertiesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceDevicePropertiesListResult from a JSON string
audience_device_properties_list_result_instance = AudienceDevicePropertiesListResult.from_json(json)
# print the JSON string representation of the object
print(AudienceDevicePropertiesListResult.to_json())

# convert the object into a dict
audience_device_properties_list_result_dict = audience_device_properties_list_result_instance.to_dict()
# create an instance of AudienceDevicePropertiesListResult from a dict
audience_device_properties_list_result_from_dict = AudienceDevicePropertiesListResult.from_dict(audience_device_properties_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


