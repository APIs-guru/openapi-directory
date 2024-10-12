# GdprVerificationResult

GDPR tests verification result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Optional error message if the verification failed. | [optional] 
**status** | **bool** | Verification status. True means that the verification was successfull. | [optional] 

## Example

```python
from openapi_client.models.gdpr_verification_result import GdprVerificationResult

# TODO update the JSON string below
json = "{}"
# create an instance of GdprVerificationResult from a JSON string
gdpr_verification_result_instance = GdprVerificationResult.from_json(json)
# print the JSON string representation of the object
print(GdprVerificationResult.to_json())

# convert the object into a dict
gdpr_verification_result_dict = gdpr_verification_result_instance.to_dict()
# create an instance of GdprVerificationResult from a dict
gdpr_verification_result_from_dict = GdprVerificationResult.from_dict(gdpr_verification_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


