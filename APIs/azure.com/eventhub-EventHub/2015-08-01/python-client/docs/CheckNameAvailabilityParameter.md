# CheckNameAvailabilityParameter

Parameter supplied to check Namespace name availability operation 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name to check the namespace name availability | 

## Example

```python
from openapi_client.models.check_name_availability_parameter import CheckNameAvailabilityParameter

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityParameter from a JSON string
check_name_availability_parameter_instance = CheckNameAvailabilityParameter.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityParameter.to_json())

# convert the object into a dict
check_name_availability_parameter_dict = check_name_availability_parameter_instance.to_dict()
# create an instance of CheckNameAvailabilityParameter from a dict
check_name_availability_parameter_from_dict = CheckNameAvailabilityParameter.from_dict(check_name_availability_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


