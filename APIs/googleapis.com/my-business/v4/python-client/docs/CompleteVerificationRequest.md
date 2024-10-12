# CompleteVerificationRequest

Request message for Verifications.CompleteVerificationAction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pin** | **str** | PIN code received by the merchant to complete the verification. | [optional] 

## Example

```python
from openapi_client.models.complete_verification_request import CompleteVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteVerificationRequest from a JSON string
complete_verification_request_instance = CompleteVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(CompleteVerificationRequest.to_json())

# convert the object into a dict
complete_verification_request_dict = complete_verification_request_instance.to_dict()
# create an instance of CompleteVerificationRequest from a dict
complete_verification_request_from_dict = CompleteVerificationRequest.from_dict(complete_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


