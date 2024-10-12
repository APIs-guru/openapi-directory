# CompleteVerificationResponse

Response message for Verifications.CompleteVerificationAction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verification** | [**Verification**](Verification.md) |  | [optional] 

## Example

```python
from openapi_client.models.complete_verification_response import CompleteVerificationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteVerificationResponse from a JSON string
complete_verification_response_instance = CompleteVerificationResponse.from_json(json)
# print the JSON string representation of the object
print(CompleteVerificationResponse.to_json())

# convert the object into a dict
complete_verification_response_dict = complete_verification_response_instance.to_dict()
# create an instance of CompleteVerificationResponse from a dict
complete_verification_response_from_dict = CompleteVerificationResponse.from_dict(complete_verification_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


