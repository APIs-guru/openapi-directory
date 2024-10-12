# CheckNameAvailabilityResult

The CheckNameAvailability operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Gets an error message explaining the Reason value in more detail. | [optional] [readonly] 
**name_available** | **bool** | Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used. | [optional] [readonly] 
**reason** | **str** | Gets the reason that a storage account name could not be used. The Reason element is only returned if NameAvailable is false. | [optional] [readonly] 

## Example

```python
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityResult from a JSON string
check_name_availability_result_instance = CheckNameAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityResult.to_json())

# convert the object into a dict
check_name_availability_result_dict = check_name_availability_result_instance.to_dict()
# create an instance of CheckNameAvailabilityResult from a dict
check_name_availability_result_from_dict = CheckNameAvailabilityResult.from_dict(check_name_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


