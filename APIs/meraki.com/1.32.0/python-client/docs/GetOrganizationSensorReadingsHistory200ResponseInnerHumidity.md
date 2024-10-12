# GetOrganizationSensorReadingsHistory200ResponseInnerHumidity

Reading for the 'humidity' metric. This will only be present if the 'metric' property equals 'humidity'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relative_percentage** | **int** | Humidity reading in %RH. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_humidity import GetOrganizationSensorReadingsHistory200ResponseInnerHumidity

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerHumidity from a JSON string
get_organization_sensor_readings_history200_response_inner_humidity_instance = GetOrganizationSensorReadingsHistory200ResponseInnerHumidity.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerHumidity.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_humidity_dict = get_organization_sensor_readings_history200_response_inner_humidity_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerHumidity from a dict
get_organization_sensor_readings_history200_response_inner_humidity_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerHumidity.from_dict(get_organization_sensor_readings_history200_response_inner_humidity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


