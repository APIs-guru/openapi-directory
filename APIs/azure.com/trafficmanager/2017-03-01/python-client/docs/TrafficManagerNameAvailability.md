# TrafficManagerNameAvailability

Class representing a Traffic Manager Name Availability response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Descriptive message that explains why the name is not available, when applicable. | [optional] 
**name** | **str** | The relative name. | [optional] 
**name_available** | **bool** | Describes whether the relative name is available or not. | [optional] 
**reason** | **str** | The reason why the name is not available, when applicable. | [optional] 
**type** | **str** | Traffic Manager profile resource type. | [optional] 

## Example

```python
from openapi_client.models.traffic_manager_name_availability import TrafficManagerNameAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficManagerNameAvailability from a JSON string
traffic_manager_name_availability_instance = TrafficManagerNameAvailability.from_json(json)
# print the JSON string representation of the object
print(TrafficManagerNameAvailability.to_json())

# convert the object into a dict
traffic_manager_name_availability_dict = traffic_manager_name_availability_instance.to_dict()
# create an instance of TrafficManagerNameAvailability from a dict
traffic_manager_name_availability_from_dict = TrafficManagerNameAvailability.from_dict(traffic_manager_name_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


