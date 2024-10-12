# CheckNameAvailabilityOutput

Output of check name availability API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed error message describing why the name is not available. | [optional] [readonly] 
**name_available** | **bool** | Indicates whether the name is available. | [optional] [readonly] 
**reason** | **str** | The reason why the name is not available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.check_name_availability_output import CheckNameAvailabilityOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityOutput from a JSON string
check_name_availability_output_instance = CheckNameAvailabilityOutput.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityOutput.to_json())

# convert the object into a dict
check_name_availability_output_dict = check_name_availability_output_instance.to_dict()
# create an instance of CheckNameAvailabilityOutput from a dict
check_name_availability_output_from_dict = CheckNameAvailabilityOutput.from_dict(check_name_availability_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


