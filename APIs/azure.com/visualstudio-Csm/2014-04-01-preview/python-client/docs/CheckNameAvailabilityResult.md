# CheckNameAvailabilityResult

The response to a name availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The message describing the detailed reason. | [optional] 
**name_available** | **bool** | The value which indicates whether the provided name is available. | [optional] 

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


