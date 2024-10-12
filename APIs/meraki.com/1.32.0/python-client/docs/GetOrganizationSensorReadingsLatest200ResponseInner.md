# GetOrganizationSensorReadingsLatest200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | [**GetOrganizationSensorReadingsHistory200ResponseInnerNetwork**](GetOrganizationSensorReadingsHistory200ResponseInnerNetwork.md) |  | [optional] 
**readings** | [**List[GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner]**](GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner.md) | Array of latest readings from the sensor. Each object represents a single reading for a single metric. | [optional] 
**serial** | **str** | Serial number of the sensor that took the readings. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_latest200_response_inner import GetOrganizationSensorReadingsLatest200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsLatest200ResponseInner from a JSON string
get_organization_sensor_readings_latest200_response_inner_instance = GetOrganizationSensorReadingsLatest200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsLatest200ResponseInner.to_json())

# convert the object into a dict
get_organization_sensor_readings_latest200_response_inner_dict = get_organization_sensor_readings_latest200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsLatest200ResponseInner from a dict
get_organization_sensor_readings_latest200_response_inner_from_dict = GetOrganizationSensorReadingsLatest200ResponseInner.from_dict(get_organization_sensor_readings_latest200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


