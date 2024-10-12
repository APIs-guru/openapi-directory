# PaymentsProgramOnboardingResponse

Type used by the payments program onboarding response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onboarding_status** | **str** | This enumeration value indicates the eligibility of payment onboarding for the registered site. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramOnboardingStatus&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**steps** | [**List[PaymentsProgramOnboardingSteps]**](PaymentsProgramOnboardingSteps.md) | An array of the active process steps for payment onboarding and the status of each step. This array includes the step &lt;strong&gt;name&lt;/strong&gt;, step &lt;strong&gt;status&lt;/strong&gt;, and a &lt;strong&gt;webUrl&lt;/strong&gt; to the &lt;code&gt;IN_PROGRESS&lt;/code&gt; step. The step names are returned in sequential order.  | [optional] 

## Example

```python
from openapi_client.models.payments_program_onboarding_response import PaymentsProgramOnboardingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentsProgramOnboardingResponse from a JSON string
payments_program_onboarding_response_instance = PaymentsProgramOnboardingResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentsProgramOnboardingResponse.to_json())

# convert the object into a dict
payments_program_onboarding_response_dict = payments_program_onboarding_response_instance.to_dict()
# create an instance of PaymentsProgramOnboardingResponse from a dict
payments_program_onboarding_response_from_dict = PaymentsProgramOnboardingResponse.from_dict(payments_program_onboarding_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


