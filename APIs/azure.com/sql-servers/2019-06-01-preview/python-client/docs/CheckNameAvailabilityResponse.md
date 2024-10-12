# CheckNameAvailabilityResponse

The result of a name availability check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | True if the name is available, otherwise false. | [optional] [readonly] 
**message** | **str** | A message explaining why the name is unavailable. Will be undefined if the name is available. | [optional] [readonly] 
**name** | **str** | The name whose availability was checked. | [optional] [readonly] 
**reason** | **str** | The reason code explaining why the name is unavailable. Will be undefined if the name is available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.check_name_availability_response import CheckNameAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityResponse from a JSON string
check_name_availability_response_instance = CheckNameAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityResponse.to_json())

# convert the object into a dict
check_name_availability_response_dict = check_name_availability_response_instance.to_dict()
# create an instance of CheckNameAvailabilityResponse from a dict
check_name_availability_response_from_dict = CheckNameAvailabilityResponse.from_dict(check_name_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


