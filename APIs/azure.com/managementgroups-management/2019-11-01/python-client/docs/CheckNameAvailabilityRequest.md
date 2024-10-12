# CheckNameAvailabilityRequest

Management group name availability check parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name to check for availability | [optional] 
**type** | **str** | fully qualified resource type which includes provider namespace | [optional] 

## Example

```python
from openapi_client.models.check_name_availability_request import CheckNameAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityRequest from a JSON string
check_name_availability_request_instance = CheckNameAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityRequest.to_json())

# convert the object into a dict
check_name_availability_request_dict = check_name_availability_request_instance.to_dict()
# create an instance of CheckNameAvailabilityRequest from a dict
check_name_availability_request_from_dict = CheckNameAvailabilityRequest.from_dict(check_name_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


