# CreateEnrollmentTokenResponse

Response message for create enrollment token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollment_token** | **str** | Enrollment token. | [optional] 

## Example

```python
from openapi_client.models.create_enrollment_token_response import CreateEnrollmentTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateEnrollmentTokenResponse from a JSON string
create_enrollment_token_response_instance = CreateEnrollmentTokenResponse.from_json(json)
# print the JSON string representation of the object
print(CreateEnrollmentTokenResponse.to_json())

# convert the object into a dict
create_enrollment_token_response_dict = create_enrollment_token_response_instance.to_dict()
# create an instance of CreateEnrollmentTokenResponse from a dict
create_enrollment_token_response_from_dict = CreateEnrollmentTokenResponse.from_dict(create_enrollment_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


