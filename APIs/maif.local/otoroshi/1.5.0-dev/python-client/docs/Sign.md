# Sign

Strategy where signature and field values are verified, and then token si re-signed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algo_settings** | [**GlobalJwtVerifierAlgoSettings**](GlobalJwtVerifierAlgoSettings.md) |  | 
**type** | **str** | String with value Sign | 
**verification_settings** | [**VerificationSettings**](VerificationSettings.md) |  | 

## Example

```python
from openapi_client.models.sign import Sign

# TODO update the JSON string below
json = "{}"
# create an instance of Sign from a JSON string
sign_instance = Sign.from_json(json)
# print the JSON string representation of the object
print(Sign.to_json())

# convert the object into a dict
sign_dict = sign_instance.to_dict()
# create an instance of Sign from a dict
sign_from_dict = Sign.from_dict(sign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


