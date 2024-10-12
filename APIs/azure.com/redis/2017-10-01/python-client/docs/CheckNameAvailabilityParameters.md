# CheckNameAvailabilityParameters

Parameters body to pass for name availability check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name. | 
**type** | **str** | Resource type. The only legal value of this property for checking redis cache name availability is &#39;Microsoft.Cache/redis&#39;. | 

## Example

```python
from openapi_client.models.check_name_availability_parameters import CheckNameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityParameters from a JSON string
check_name_availability_parameters_instance = CheckNameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityParameters.to_json())

# convert the object into a dict
check_name_availability_parameters_dict = check_name_availability_parameters_instance.to_dict()
# create an instance of CheckNameAvailabilityParameters from a dict
check_name_availability_parameters_from_dict = CheckNameAvailabilityParameters.from_dict(check_name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


