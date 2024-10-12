# AppleMultifactorSecretDetails

Apple secret details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_specific_password** | **str** | The app specific password required for app publishing for 2FA accounts | [optional] 
**auth_code** | **str** | The 6 digit Apple OTP for Multifactor accounts | 
**password** | **str** | password to connect to apple store. | 
**username** | **str** | username to connect to apple store. | 

## Example

```python
from openapi_client.models.apple_multifactor_secret_details import AppleMultifactorSecretDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AppleMultifactorSecretDetails from a JSON string
apple_multifactor_secret_details_instance = AppleMultifactorSecretDetails.from_json(json)
# print the JSON string representation of the object
print(AppleMultifactorSecretDetails.to_json())

# convert the object into a dict
apple_multifactor_secret_details_dict = apple_multifactor_secret_details_instance.to_dict()
# create an instance of AppleMultifactorSecretDetails from a dict
apple_multifactor_secret_details_from_dict = AppleMultifactorSecretDetails.from_dict(apple_multifactor_secret_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


