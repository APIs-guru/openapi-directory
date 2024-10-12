# CheckNameAvailabilityResponse

Check Name Availability Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | detail message | [optional] 
**name_available** | [**NameAvailability**](NameAvailability.md) |  | 
**reason** | [**NameUnavailableReason**](NameUnavailableReason.md) |  | [optional] 

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


