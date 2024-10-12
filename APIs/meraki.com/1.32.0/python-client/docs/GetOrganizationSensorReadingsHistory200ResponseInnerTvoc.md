# GetOrganizationSensorReadingsHistory200ResponseInnerTvoc

Reading for the 'tvoc' metric. This will only be present if the 'metric' property equals 'tvoc'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concentration** | **int** | TVOC reading in micrograms per cubic meter. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_tvoc import GetOrganizationSensorReadingsHistory200ResponseInnerTvoc

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerTvoc from a JSON string
get_organization_sensor_readings_history200_response_inner_tvoc_instance = GetOrganizationSensorReadingsHistory200ResponseInnerTvoc.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerTvoc.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_tvoc_dict = get_organization_sensor_readings_history200_response_inner_tvoc_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerTvoc from a dict
get_organization_sensor_readings_history200_response_inner_tvoc_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerTvoc.from_dict(get_organization_sensor_readings_history200_response_inner_tvoc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


