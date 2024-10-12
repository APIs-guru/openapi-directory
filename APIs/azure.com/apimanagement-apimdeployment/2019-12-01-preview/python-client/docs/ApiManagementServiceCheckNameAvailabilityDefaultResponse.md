# ApiManagementServiceCheckNameAvailabilityDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ApiManagementServiceCheckNameAvailabilityDefaultResponseError**](ApiManagementServiceCheckNameAvailabilityDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_management_service_check_name_availability_default_response import ApiManagementServiceCheckNameAvailabilityDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceCheckNameAvailabilityDefaultResponse from a JSON string
api_management_service_check_name_availability_default_response_instance = ApiManagementServiceCheckNameAvailabilityDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceCheckNameAvailabilityDefaultResponse.to_json())

# convert the object into a dict
api_management_service_check_name_availability_default_response_dict = api_management_service_check_name_availability_default_response_instance.to_dict()
# create an instance of ApiManagementServiceCheckNameAvailabilityDefaultResponse from a dict
api_management_service_check_name_availability_default_response_from_dict = ApiManagementServiceCheckNameAvailabilityDefaultResponse.from_dict(api_management_service_check_name_availability_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


