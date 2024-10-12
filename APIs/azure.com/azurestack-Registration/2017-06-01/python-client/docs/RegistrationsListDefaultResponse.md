# RegistrationsListDefaultResponse

Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**RegistrationsListDefaultResponseError**](RegistrationsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.registrations_list_default_response import RegistrationsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationsListDefaultResponse from a JSON string
registrations_list_default_response_instance = RegistrationsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(RegistrationsListDefaultResponse.to_json())

# convert the object into a dict
registrations_list_default_response_dict = registrations_list_default_response_instance.to_dict()
# create an instance of RegistrationsListDefaultResponse from a dict
registrations_list_default_response_from_dict = RegistrationsListDefaultResponse.from_dict(registrations_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


