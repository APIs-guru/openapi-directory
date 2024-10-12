# FetchVerificationOptionsResponse

Response message for Verifications.FetchVerificationOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**List[VerificationOption]**](VerificationOption.md) | The available verification options. | [optional] 

## Example

```python
from openapi_client.models.fetch_verification_options_response import FetchVerificationOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchVerificationOptionsResponse from a JSON string
fetch_verification_options_response_instance = FetchVerificationOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchVerificationOptionsResponse.to_json())

# convert the object into a dict
fetch_verification_options_response_dict = fetch_verification_options_response_instance.to_dict()
# create an instance of FetchVerificationOptionsResponse from a dict
fetch_verification_options_response_from_dict = FetchVerificationOptionsResponse.from_dict(fetch_verification_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


