# Policy

A policy for Binary Authorization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admission_whitelist_patterns** | [**List[AdmissionWhitelistPattern]**](AdmissionWhitelistPattern.md) | Optional. Admission policy allowlisting. A matching admission request will always be permitted. This feature is typically used to exclude Google or third-party infrastructure images from Binary Authorization policies. | [optional] 
**cluster_admission_rules** | [**Dict[str, AdmissionRule]**](AdmissionRule.md) | Optional. Per-cluster admission rules. Cluster spec format: &#x60;location.clusterId&#x60;. There can be at most one admission rule per cluster spec. A &#x60;location&#x60; is either a compute zone (e.g. us-central1-a) or a region (e.g. us-central1). For &#x60;clusterId&#x60; syntax restrictions see https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters. | [optional] 
**default_admission_rule** | [**AdmissionRule**](AdmissionRule.md) |  | [optional] 
**description** | **str** | Optional. A descriptive comment. | [optional] 
**etag** | **str** | Optional. A checksum, returned by the server, that can be sent on update requests to ensure the policy has an up-to-date value before attempting to update it. See https://google.aip.dev/154. | [optional] 
**global_policy_evaluation_mode** | **str** | Optional. Controls the evaluation of a Google-maintained global admission policy for common system-level images. Images not covered by the global policy will be subject to the project admission policy. This setting has no effect when specified inside a global admission policy. | [optional] 
**istio_service_identity_admission_rules** | [**Dict[str, AdmissionRule]**](AdmissionRule.md) | Optional. Per-istio-service-identity admission rules. Istio service identity spec format: &#x60;spiffe:///ns//sa/&#x60; or &#x60;/ns//sa/&#x60; e.g. &#x60;spiffe://example.com/ns/test-ns/sa/default&#x60; | [optional] 
**kubernetes_namespace_admission_rules** | [**Dict[str, AdmissionRule]**](AdmissionRule.md) | Optional. Per-kubernetes-namespace admission rules. K8s namespace spec format: &#x60;[a-z.-]+&#x60;, e.g. &#x60;some-namespace&#x60; | [optional] 
**kubernetes_service_account_admission_rules** | [**Dict[str, AdmissionRule]**](AdmissionRule.md) | Optional. Per-kubernetes-service-account admission rules. Service account spec format: &#x60;namespace:serviceaccount&#x60;. e.g. &#x60;test-ns:default&#x60; | [optional] 
**name** | **str** | Output only. The resource name, in the format &#x60;projects/*/policy&#x60;. There is at most one policy per project. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the policy was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy import Policy

# TODO update the JSON string below
json = "{}"
# create an instance of Policy from a JSON string
policy_instance = Policy.from_json(json)
# print the JSON string representation of the object
print(Policy.to_json())

# convert the object into a dict
policy_dict = policy_instance.to_dict()
# create an instance of Policy from a dict
policy_from_dict = Policy.from_dict(policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


