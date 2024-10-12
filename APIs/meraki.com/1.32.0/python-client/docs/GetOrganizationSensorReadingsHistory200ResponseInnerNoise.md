# GetOrganizationSensorReadingsHistory200ResponseInnerNoise

Reading for the 'noise' metric. This will only be present if the 'metric' property equals 'noise'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ambient** | [**GetOrganizationSensorReadingsHistory200ResponseInnerNoiseAmbient**](GetOrganizationSensorReadingsHistory200ResponseInnerNoiseAmbient.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_noise import GetOrganizationSensorReadingsHistory200ResponseInnerNoise

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerNoise from a JSON string
get_organization_sensor_readings_history200_response_inner_noise_instance = GetOrganizationSensorReadingsHistory200ResponseInnerNoise.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerNoise.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_noise_dict = get_organization_sensor_readings_history200_response_inner_noise_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerNoise from a dict
get_organization_sensor_readings_history200_response_inner_noise_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerNoise.from_dict(get_organization_sensor_readings_history200_response_inner_noise_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


