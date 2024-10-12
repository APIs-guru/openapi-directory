# ApiManagementServiceNameAvailabilityResult

Response of the CheckNameAvailability operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | If reason &#x3D;&#x3D; invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason &#x3D;&#x3D; AlreadyExists, explain that &lt;resourceName&gt; is already in use, and direct them to select a different name. | [optional] [readonly] 
**name_available** | **bool** | True if the name is available and can be used to create a new API Management service; otherwise false. | [optional] [readonly] 
**reason** | **str** | Invalid indicates the name provided does not match the resource provider’s naming requirements (incorrect length, unsupported characters, etc.)  AlreadyExists indicates that the name is already in use and is therefore unavailable. | [optional] 

## Example

```python
from openapi_client.models.api_management_service_name_availability_result import ApiManagementServiceNameAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceNameAvailabilityResult from a JSON string
api_management_service_name_availability_result_instance = ApiManagementServiceNameAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceNameAvailabilityResult.to_json())

# convert the object into a dict
api_management_service_name_availability_result_dict = api_management_service_name_availability_result_instance.to_dict()
# create an instance of ApiManagementServiceNameAvailabilityResult from a dict
api_management_service_name_availability_result_from_dict = ApiManagementServiceNameAvailabilityResult.from_dict(api_management_service_name_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


