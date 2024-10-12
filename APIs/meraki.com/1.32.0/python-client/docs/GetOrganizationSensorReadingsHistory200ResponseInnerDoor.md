# GetOrganizationSensorReadingsHistory200ResponseInnerDoor

Reading for the 'door' metric. This will only be present if the 'metric' property equals 'door'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**open** | **bool** | True if the door is open. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_door import GetOrganizationSensorReadingsHistory200ResponseInnerDoor

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerDoor from a JSON string
get_organization_sensor_readings_history200_response_inner_door_instance = GetOrganizationSensorReadingsHistory200ResponseInnerDoor.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerDoor.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_door_dict = get_organization_sensor_readings_history200_response_inner_door_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerDoor from a dict
get_organization_sensor_readings_history200_response_inner_door_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerDoor.from_dict(get_organization_sensor_readings_history200_response_inner_door_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


