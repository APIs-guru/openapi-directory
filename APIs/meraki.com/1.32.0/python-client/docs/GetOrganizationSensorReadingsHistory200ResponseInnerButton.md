# GetOrganizationSensorReadingsHistory200ResponseInnerButton

Reading for the 'button' metric. This will only be present if the 'metric' property equals 'button'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**press_type** | **str** | Type of button press that occurred. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_button import GetOrganizationSensorReadingsHistory200ResponseInnerButton

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerButton from a JSON string
get_organization_sensor_readings_history200_response_inner_button_instance = GetOrganizationSensorReadingsHistory200ResponseInnerButton.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerButton.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_button_dict = get_organization_sensor_readings_history200_response_inner_button_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerButton from a dict
get_organization_sensor_readings_history200_response_inner_button_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerButton.from_dict(get_organization_sensor_readings_history200_response_inner_button_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


