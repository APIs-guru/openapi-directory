# AnthosObservabilityMembershipSpec

**Anthosobservability**: Per-Membership Feature spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**do_not_optimize_metrics** | **bool** | Use full of metrics rather than optimized metrics. See https://cloud.google.com/anthos/clusters/docs/on-prem/1.8/concepts/logging-and-monitoring#optimized_metrics_default_metrics | [optional] 
**enable_stackdriver_on_applications** | **bool** | Enable collecting and reporting metrics and logs from user apps. | [optional] 
**version** | **str** | the version of stackdriver operator used by this feature | [optional] 

## Example

```python
from openapi_client.models.anthos_observability_membership_spec import AnthosObservabilityMembershipSpec

# TODO update the JSON string below
json = "{}"
# create an instance of AnthosObservabilityMembershipSpec from a JSON string
anthos_observability_membership_spec_instance = AnthosObservabilityMembershipSpec.from_json(json)
# print the JSON string representation of the object
print(AnthosObservabilityMembershipSpec.to_json())

# convert the object into a dict
anthos_observability_membership_spec_dict = anthos_observability_membership_spec_instance.to_dict()
# create an instance of AnthosObservabilityMembershipSpec from a dict
anthos_observability_membership_spec_from_dict = AnthosObservabilityMembershipSpec.from_dict(anthos_observability_membership_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


