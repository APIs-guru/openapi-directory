# VerifyLocationRequest

Request message for Verifications.VerifyLocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_input** | [**AddressInput**](AddressInput.md) |  | [optional] 
**context** | [**ServiceBusinessContext**](ServiceBusinessContext.md) |  | [optional] 
**email_input** | [**EmailInput**](EmailInput.md) |  | [optional] 
**language_code** | **str** | The BCP 47 language code representing the language that is to be used for the verification process. | [optional] 
**method** | **str** | Verification method. | [optional] 
**phone_input** | [**PhoneInput**](PhoneInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.verify_location_request import VerifyLocationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyLocationRequest from a JSON string
verify_location_request_instance = VerifyLocationRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyLocationRequest.to_json())

# convert the object into a dict
verify_location_request_dict = verify_location_request_instance.to_dict()
# create an instance of VerifyLocationRequest from a dict
verify_location_request_from_dict = VerifyLocationRequest.from_dict(verify_location_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


