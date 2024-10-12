# VerifyChallengeResponseRequest

signed ChallengeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challenge_response** | [**SignedData**](SignedData.md) |  | [optional] 
**expected_identity** | **str** | Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user&#39;s email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match. | [optional] 

## Example

```python
from openapi_client.models.verify_challenge_response_request import VerifyChallengeResponseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyChallengeResponseRequest from a JSON string
verify_challenge_response_request_instance = VerifyChallengeResponseRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyChallengeResponseRequest.to_json())

# convert the object into a dict
verify_challenge_response_request_dict = verify_challenge_response_request_instance.to_dict()
# create an instance of VerifyChallengeResponseRequest from a dict
verify_challenge_response_request_from_dict = VerifyChallengeResponseRequest.from_dict(verify_challenge_response_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


