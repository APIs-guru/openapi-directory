# CheckCapacityNameAvailabilityResult

The checking result of capacity name availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed message of the request unavailability. | [optional] 
**name_available** | **bool** | Indicator of availability of the capacity name. | [optional] 
**reason** | **str** | The reason of unavailability. | [optional] 

## Example

```python
from openapi_client.models.check_capacity_name_availability_result import CheckCapacityNameAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckCapacityNameAvailabilityResult from a JSON string
check_capacity_name_availability_result_instance = CheckCapacityNameAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(CheckCapacityNameAvailabilityResult.to_json())

# convert the object into a dict
check_capacity_name_availability_result_dict = check_capacity_name_availability_result_instance.to_dict()
# create an instance of CheckCapacityNameAvailabilityResult from a dict
check_capacity_name_availability_result_from_dict = CheckCapacityNameAvailabilityResult.from_dict(check_capacity_name_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


