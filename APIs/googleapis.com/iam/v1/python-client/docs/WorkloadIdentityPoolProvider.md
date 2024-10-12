# WorkloadIdentityPoolProvider

A configuration for an external identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_condition** | **str** | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * &#x60;assertion&#x60;: JSON representing the authentication credential issued by the provider. * &#x60;google&#x60;: The Google attributes mapped from the assertion in the &#x60;attribute_mappings&#x60;. * &#x60;attribute&#x60;: The custom attributes mapped from the assertion in the &#x60;attribute_mappings&#x60;. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credential are accepted. The following example shows how to only allow credentials with a mapped &#x60;google.groups&#x60; value of &#x60;admins&#x60;: &#x60;&#x60;&#x60; \&quot;&#39;admins&#39; in google.groups\&quot; &#x60;&#x60;&#x60; | [optional] 
**attribute_mapping** | **Dict[str, str]** |  Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as &#x60;subject&#x60; and &#x60;segment&#x60;. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * &#x60;google.subject&#x60;: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. Cannot exceed 127 bytes. * &#x60;google.groups&#x60;: Groups the external identity belongs to. You can grant groups access to resources using an IAM &#x60;principalSet&#x60; binding; access applies to all members of the group. You can also provide custom attributes by specifying &#x60;attribute.{custom_attribute}&#x60;, where &#x60;{custom_attribute}&#x60; is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workload to Google Cloud resources. For example: * &#x60;google.subject&#x60;: &#x60;principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}&#x60; * &#x60;google.groups&#x60;: &#x60;principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}&#x60; * &#x60;attribute.{custom_attribute}&#x60;: &#x60;principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}&#x60; Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the &#x60;assertion&#x60; keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 8KB. For AWS providers, if no attribute mapping is defined, the following default mapping applies: &#x60;&#x60;&#x60; { \&quot;google.subject\&quot;:\&quot;assertion.arn\&quot;, \&quot;attribute.aws_role\&quot;: \&quot;assertion.arn.contains(&#39;assumed-role&#39;)\&quot; \&quot; ? assertion.arn.extract(&#39;{account_arn}assumed-role/&#39;)\&quot; \&quot; + &#39;assumed-role/&#39;\&quot; \&quot; + assertion.arn.extract(&#39;assumed-role/{role_name}/&#39;)\&quot; \&quot; : assertion.arn\&quot;, } &#x60;&#x60;&#x60; If any custom attribute mappings are defined, they must include a mapping to the &#x60;google.subject&#x60; attribute. For OIDC providers, you must supply a custom mapping, which must include the &#x60;google.subject&#x60; attribute. For example, the following maps the &#x60;sub&#x60; claim of the incoming credential to the &#x60;subject&#x60; attribute on a Google token: &#x60;&#x60;&#x60; {\&quot;google.subject\&quot;: \&quot;assertion.sub\&quot;} &#x60;&#x60;&#x60; | [optional] 
**aws** | [**Aws**](Aws.md) |  | [optional] 
**description** | **str** | A description for the provider. Cannot exceed 256 characters. | [optional] 
**disabled** | **bool** | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. | [optional] 
**display_name** | **str** | A display name for the provider. Cannot exceed 32 characters. | [optional] 
**expire_time** | **str** | Output only. Time after which the workload identity pool provider will be permanently purged and cannot be recovered. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the provider. | [optional] [readonly] 
**oidc** | [**Oidc**](Oidc.md) |  | [optional] 
**saml** | [**Saml**](Saml.md) |  | [optional] 
**state** | **str** | Output only. The state of the provider. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_identity_pool_provider import WorkloadIdentityPoolProvider

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadIdentityPoolProvider from a JSON string
workload_identity_pool_provider_instance = WorkloadIdentityPoolProvider.from_json(json)
# print the JSON string representation of the object
print(WorkloadIdentityPoolProvider.to_json())

# convert the object into a dict
workload_identity_pool_provider_dict = workload_identity_pool_provider_instance.to_dict()
# create an instance of WorkloadIdentityPoolProvider from a dict
workload_identity_pool_provider_from_dict = WorkloadIdentityPoolProvider.from_dict(workload_identity_pool_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


