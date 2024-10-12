# IdentityErrorResponse

This is the response from an Identity operation in the case an error occurs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error code | [optional] 
**error_description** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.identity_error_response import IdentityErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityErrorResponse from a JSON string
identity_error_response_instance = IdentityErrorResponse.from_json(json)
# print the JSON string representation of the object
print(IdentityErrorResponse.to_json())

# convert the object into a dict
identity_error_response_dict = identity_error_response_instance.to_dict()
# create an instance of IdentityErrorResponse from a dict
identity_error_response_from_dict = IdentityErrorResponse.from_dict(identity_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


