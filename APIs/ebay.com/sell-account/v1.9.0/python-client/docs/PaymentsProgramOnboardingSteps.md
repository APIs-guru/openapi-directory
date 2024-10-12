# PaymentsProgramOnboardingSteps

The payments program onboarding steps, status, and link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the step in the steps array. Over time, these names are subject to change as processes change. The output sample contains example step names. Review an actual call response for updated step names.  | [optional] 
**status** | **str** | This enumeration value indicates the status of the associated step. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Only one step can be &lt;code&gt;IN_PROGRESS&lt;/code&gt; at a time.&lt;/span&gt;&lt;/p&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:PaymentsProgramOnboardingStepStatus&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**web_url** | **str** | This URL provides access to the &lt;code&gt;IN_PROGRESS&lt;/code&gt; step. | [optional] 

## Example

```python
from openapi_client.models.payments_program_onboarding_steps import PaymentsProgramOnboardingSteps

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentsProgramOnboardingSteps from a JSON string
payments_program_onboarding_steps_instance = PaymentsProgramOnboardingSteps.from_json(json)
# print the JSON string representation of the object
print(PaymentsProgramOnboardingSteps.to_json())

# convert the object into a dict
payments_program_onboarding_steps_dict = payments_program_onboarding_steps_instance.to_dict()
# create an instance of PaymentsProgramOnboardingSteps from a dict
payments_program_onboarding_steps_from_dict = PaymentsProgramOnboardingSteps.from_dict(payments_program_onboarding_steps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


