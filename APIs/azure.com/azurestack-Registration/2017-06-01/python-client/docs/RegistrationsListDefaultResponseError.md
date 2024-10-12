# RegistrationsListDefaultResponseError

The details of the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] [readonly] 
**message** | **str** | Error message indicating why the operation failed. | [optional] [readonly] 
**target** | **str** | The target of the particular error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registrations_list_default_response_error import RegistrationsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationsListDefaultResponseError from a JSON string
registrations_list_default_response_error_instance = RegistrationsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(RegistrationsListDefaultResponseError.to_json())

# convert the object into a dict
registrations_list_default_response_error_dict = registrations_list_default_response_error_instance.to_dict()
# create an instance of RegistrationsListDefaultResponseError from a dict
registrations_list_default_response_error_from_dict = RegistrationsListDefaultResponseError.from_dict(registrations_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


