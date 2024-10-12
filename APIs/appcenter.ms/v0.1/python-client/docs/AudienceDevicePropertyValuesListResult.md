# AudienceDevicePropertyValuesListResult

List of device property values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | List of device property values. | 

## Example

```python
from openapi_client.models.audience_device_property_values_list_result import AudienceDevicePropertyValuesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceDevicePropertyValuesListResult from a JSON string
audience_device_property_values_list_result_instance = AudienceDevicePropertyValuesListResult.from_json(json)
# print the JSON string representation of the object
print(AudienceDevicePropertyValuesListResult.to_json())

# convert the object into a dict
audience_device_property_values_list_result_dict = audience_device_property_values_list_result_instance.to_dict()
# create an instance of AudienceDevicePropertyValuesListResult from a dict
audience_device_property_values_list_result_from_dict = AudienceDevicePropertyValuesListResult.from_dict(audience_device_property_values_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


