# CheckNameAvailabilityResult

Describes the result of the request to check management group name availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Required if nameAvailable &#x3D;&#x3D; false. Localized. If reason &#x3D;&#x3D; invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason &#x3D;&#x3D; AlreadyExists, explain that is already in use, and direct them to select a different name. | [optional] [readonly] 
**name_available** | **bool** | Required. True indicates name is valid and available. False indicates the name is invalid, unavailable, or both. | [optional] [readonly] 
**reason** | **str** | Required if nameAvailable &#x3D;&#x3D; false. Invalid indicates the name provided does not match the resource provider&#39;s naming requirements (incorrect length, unsupported characters, etc.) AlreadyExists indicates that the name is already in use and is therefore unavailable. | [optional] [readonly] 

## Example

```python
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityResult from a JSON string
check_name_availability_result_instance = CheckNameAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityResult.to_json())

# convert the object into a dict
check_name_availability_result_dict = check_name_availability_result_instance.to_dict()
# create an instance of CheckNameAvailabilityResult from a dict
check_name_availability_result_from_dict = CheckNameAvailabilityResult.from_dict(check_name_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


