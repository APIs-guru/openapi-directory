# OnboardingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** |  | 
**org** | **str** |  | 
**password** | **str** |  | [optional] 
**retention_period_hrs** | **int** | Retention period *in nanoseconds* for the new bucket. This key&#39;s name has been misleading since OSS 2.0 GA, please transition to use &#x60;retentionPeriodSeconds&#x60;  | [optional] 
**retention_period_seconds** | **int** |  | [optional] 
**token** | **str** | Authentication token to set on the initial user. If not specified, the server will generate a token.  | [optional] 
**username** | **str** |  | 

## Example

```python
from openapi_client.models.onboarding_request import OnboardingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardingRequest from a JSON string
onboarding_request_instance = OnboardingRequest.from_json(json)
# print the JSON string representation of the object
print(OnboardingRequest.to_json())

# convert the object into a dict
onboarding_request_dict = onboarding_request_instance.to_dict()
# create an instance of OnboardingRequest from a dict
onboarding_request_from_dict = OnboardingRequest.from_dict(onboarding_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


