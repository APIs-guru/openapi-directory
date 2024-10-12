# AuthorizationAttemptInfo

State of the latest attempt to authorize a domain for certificate issuance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Output only. Human readable explanation for reaching the state. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use FailureReason enum. | [optional] [readonly] 
**domain** | **str** | Domain name of the authorization attempt. | [optional] 
**failure_reason** | **str** | Output only. Reason for failure of the authorization attempt for the domain. | [optional] [readonly] 
**state** | **str** | Output only. State of the domain for managed certificate issuance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_attempt_info import AuthorizationAttemptInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationAttemptInfo from a JSON string
authorization_attempt_info_instance = AuthorizationAttemptInfo.from_json(json)
# print the JSON string representation of the object
print(AuthorizationAttemptInfo.to_json())

# convert the object into a dict
authorization_attempt_info_dict = authorization_attempt_info_instance.to_dict()
# create an instance of AuthorizationAttemptInfo from a dict
authorization_attempt_info_from_dict = AuthorizationAttemptInfo.from_dict(authorization_attempt_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


