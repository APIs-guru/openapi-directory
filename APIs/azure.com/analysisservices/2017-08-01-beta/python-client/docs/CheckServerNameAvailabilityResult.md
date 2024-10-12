# CheckServerNameAvailabilityResult

The checking result of server name availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed message of the request unavailability. | [optional] 
**name_available** | **bool** | Indicator of available of the server name. | [optional] 
**reason** | **str** | The reason of unavailability. | [optional] 

## Example

```python
from openapi_client.models.check_server_name_availability_result import CheckServerNameAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckServerNameAvailabilityResult from a JSON string
check_server_name_availability_result_instance = CheckServerNameAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(CheckServerNameAvailabilityResult.to_json())

# convert the object into a dict
check_server_name_availability_result_dict = check_server_name_availability_result_instance.to_dict()
# create an instance of CheckServerNameAvailabilityResult from a dict
check_server_name_availability_result_from_dict = CheckServerNameAvailabilityResult.from_dict(check_server_name_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


