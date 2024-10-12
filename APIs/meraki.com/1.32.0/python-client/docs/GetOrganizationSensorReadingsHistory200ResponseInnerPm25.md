# GetOrganizationSensorReadingsHistory200ResponseInnerPm25

Reading for the 'pm25' metric. This will only be present if the 'metric' property equals 'pm25'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concentration** | **int** | PM2.5 reading in micrograms per cubic meter. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_pm25 import GetOrganizationSensorReadingsHistory200ResponseInnerPm25

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerPm25 from a JSON string
get_organization_sensor_readings_history200_response_inner_pm25_instance = GetOrganizationSensorReadingsHistory200ResponseInnerPm25.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerPm25.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_pm25_dict = get_organization_sensor_readings_history200_response_inner_pm25_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerPm25 from a dict
get_organization_sensor_readings_history200_response_inner_pm25_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerPm25.from_dict(get_organization_sensor_readings_history200_response_inner_pm25_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


