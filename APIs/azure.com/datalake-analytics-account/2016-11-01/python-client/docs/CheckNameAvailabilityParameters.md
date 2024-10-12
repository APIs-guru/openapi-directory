# CheckNameAvailabilityParameters

Data Lake Analytics account name availability check parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The Data Lake Analytics name to check availability for. | 
**type** | **str** | The resource type. Note: This should not be set by the user, as the constant value is Microsoft.DataLakeAnalytics/accounts | 

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


