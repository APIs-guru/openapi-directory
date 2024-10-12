# FetchVerificationOptionsRequest

Request message for Verifications.FetchVerificationOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**ServiceBusinessContext**](ServiceBusinessContext.md) |  | [optional] 
**language_code** | **str** | The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language. | [optional] 

## Example

```python
from openapi_client.models.fetch_verification_options_request import FetchVerificationOptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FetchVerificationOptionsRequest from a JSON string
fetch_verification_options_request_instance = FetchVerificationOptionsRequest.from_json(json)
# print the JSON string representation of the object
print(FetchVerificationOptionsRequest.to_json())

# convert the object into a dict
fetch_verification_options_request_dict = fetch_verification_options_request_instance.to_dict()
# create an instance of FetchVerificationOptionsRequest from a dict
fetch_verification_options_request_from_dict = FetchVerificationOptionsRequest.from_dict(fetch_verification_options_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


