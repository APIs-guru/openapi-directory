# ApiManagementServiceCheckNameAvailabilityDefaultResponseError

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[ApiManagementServiceCheckNameAvailabilityDefaultResponseErrorDetailsInner]**](ApiManagementServiceCheckNameAvailabilityDefaultResponseErrorDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.api_management_service_check_name_availability_default_response_error import ApiManagementServiceCheckNameAvailabilityDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceCheckNameAvailabilityDefaultResponseError from a JSON string
api_management_service_check_name_availability_default_response_error_instance = ApiManagementServiceCheckNameAvailabilityDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceCheckNameAvailabilityDefaultResponseError.to_json())

# convert the object into a dict
api_management_service_check_name_availability_default_response_error_dict = api_management_service_check_name_availability_default_response_error_instance.to_dict()
# create an instance of ApiManagementServiceCheckNameAvailabilityDefaultResponseError from a dict
api_management_service_check_name_availability_default_response_error_from_dict = ApiManagementServiceCheckNameAvailabilityDefaultResponseError.from_dict(api_management_service_check_name_availability_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


