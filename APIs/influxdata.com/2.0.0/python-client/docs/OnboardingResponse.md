# OnboardingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | [**Authorization**](Authorization.md) |  | [optional] 
**bucket** | [**Bucket**](Bucket.md) |  | [optional] 
**org** | [**Organization**](Organization.md) |  | [optional] 
**user** | [**UserResponse**](UserResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.onboarding_response import OnboardingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardingResponse from a JSON string
onboarding_response_instance = OnboardingResponse.from_json(json)
# print the JSON string representation of the object
print(OnboardingResponse.to_json())

# convert the object into a dict
onboarding_response_dict = onboarding_response_instance.to_dict()
# create an instance of OnboardingResponse from a dict
onboarding_response_from_dict = OnboardingResponse.from_dict(onboarding_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


