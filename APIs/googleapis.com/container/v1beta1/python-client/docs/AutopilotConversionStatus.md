# AutopilotConversionStatus

AutopilotConversionStatus represents conversion status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Output only. The current state of the conversion. | [optional] [readonly] 

## Example

```python
from openapi_client.models.autopilot_conversion_status import AutopilotConversionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AutopilotConversionStatus from a JSON string
autopilot_conversion_status_instance = AutopilotConversionStatus.from_json(json)
# print the JSON string representation of the object
print(AutopilotConversionStatus.to_json())

# convert the object into a dict
autopilot_conversion_status_dict = autopilot_conversion_status_instance.to_dict()
# create an instance of AutopilotConversionStatus from a dict
autopilot_conversion_status_from_dict = AutopilotConversionStatus.from_dict(autopilot_conversion_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


