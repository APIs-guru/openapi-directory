# CheckCapacityNameAvailabilityParameters

Details of capacity name request body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name for checking availability. | [optional] 
**type** | **str** | The resource type of PowerBI dedicated. | [optional] [default to 'Microsoft.PowerBIDedicated/capacities']

## Example

```python
from openapi_client.models.check_capacity_name_availability_parameters import CheckCapacityNameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CheckCapacityNameAvailabilityParameters from a JSON string
check_capacity_name_availability_parameters_instance = CheckCapacityNameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(CheckCapacityNameAvailabilityParameters.to_json())

# convert the object into a dict
check_capacity_name_availability_parameters_dict = check_capacity_name_availability_parameters_instance.to_dict()
# create an instance of CheckCapacityNameAvailabilityParameters from a dict
check_capacity_name_availability_parameters_from_dict = CheckCapacityNameAvailabilityParameters.from_dict(check_capacity_name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


