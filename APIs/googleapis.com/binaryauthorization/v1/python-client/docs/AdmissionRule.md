# AdmissionRule

An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforcement_mode** | **str** | Required. The action when a pod creation is denied by the admission rule. | [optional] 
**evaluation_mode** | **str** | Required. How this admission rule will be evaluated. | [optional] 
**require_attestations_by** | **List[str]** | Optional. The resource names of the attestors that must attest to a container image, in the format &#x60;projects/*/attestors/*&#x60;. Each attestor must exist before a policy can reference it. To add an attestor to a policy the principal issuing the policy change request must be able to read the attestor resource. Note: this field must be non-empty when the &#x60;evaluation_mode&#x60; field specifies &#x60;REQUIRE_ATTESTATION&#x60;, otherwise it must be empty. | [optional] 

## Example

```python
from openapi_client.models.admission_rule import AdmissionRule

# TODO update the JSON string below
json = "{}"
# create an instance of AdmissionRule from a JSON string
admission_rule_instance = AdmissionRule.from_json(json)
# print the JSON string representation of the object
print(AdmissionRule.to_json())

# convert the object into a dict
admission_rule_dict = admission_rule_instance.to_dict()
# create an instance of AdmissionRule from a dict
admission_rule_from_dict = AdmissionRule.from_dict(admission_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


