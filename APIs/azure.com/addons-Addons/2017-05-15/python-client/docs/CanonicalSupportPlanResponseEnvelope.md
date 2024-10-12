# CanonicalSupportPlanResponseEnvelope

The status of the Canonical support plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the ARM resource, e.g. \&quot;/subscriptions/{id}/providers/Microsoft.Addons/supportProvider/{supportProviderName}/supportPlanTypes/{planTypeName}\&quot;. | [optional] [readonly] 
**name** | **str** | The name of the Canonical support plan, i.e. \&quot;essential\&quot;, \&quot;standard\&quot; or \&quot;advanced\&quot;. | [optional] [readonly] 
**properties** | [**CanonicalSupportPlanProperties**](CanonicalSupportPlanProperties.md) |  | 
**type** | **str** | Microsoft.Addons/supportProvider | [optional] [readonly] 

## Example

```python
from openapi_client.models.canonical_support_plan_response_envelope import CanonicalSupportPlanResponseEnvelope

# TODO update the JSON string below
json = "{}"
# create an instance of CanonicalSupportPlanResponseEnvelope from a JSON string
canonical_support_plan_response_envelope_instance = CanonicalSupportPlanResponseEnvelope.from_json(json)
# print the JSON string representation of the object
print(CanonicalSupportPlanResponseEnvelope.to_json())

# convert the object into a dict
canonical_support_plan_response_envelope_dict = canonical_support_plan_response_envelope_instance.to_dict()
# create an instance of CanonicalSupportPlanResponseEnvelope from a dict
canonical_support_plan_response_envelope_from_dict = CanonicalSupportPlanResponseEnvelope.from_dict(canonical_support_plan_response_envelope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


