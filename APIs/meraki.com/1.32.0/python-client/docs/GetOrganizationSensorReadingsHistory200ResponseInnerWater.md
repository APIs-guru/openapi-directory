# GetOrganizationSensorReadingsHistory200ResponseInnerWater

Reading for the 'water' metric. This will only be present if the 'metric' property equals 'water'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**present** | **bool** | True if water is detected. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_water import GetOrganizationSensorReadingsHistory200ResponseInnerWater

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerWater from a JSON string
get_organization_sensor_readings_history200_response_inner_water_instance = GetOrganizationSensorReadingsHistory200ResponseInnerWater.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerWater.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_water_dict = get_organization_sensor_readings_history200_response_inner_water_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerWater from a dict
get_organization_sensor_readings_history200_response_inner_water_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerWater.from_dict(get_organization_sensor_readings_history200_response_inner_water_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


