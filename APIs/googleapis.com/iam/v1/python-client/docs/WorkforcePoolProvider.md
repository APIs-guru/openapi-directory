# WorkforcePoolProvider

A configuration for an external identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_condition** | **str** | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * &#x60;assertion&#x60;: JSON representing the authentication credential issued by the provider. * &#x60;google&#x60;: The Google attributes mapped from the assertion in the &#x60;attribute_mappings&#x60;. &#x60;google.profile_photo&#x60;, &#x60;google.display_name&#x60; and &#x60;google.posix_username&#x60; are not supported. * &#x60;attribute&#x60;: The custom attributes mapped from the assertion in the &#x60;attribute_mappings&#x60;. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credentials will be accepted. The following example shows how to only allow credentials with a mapped &#x60;google.groups&#x60; value of &#x60;admins&#x60;: &#x60;&#x60;&#x60; \&quot;&#39;admins&#39; in google.groups\&quot; &#x60;&#x60;&#x60; | [optional] 
**attribute_mapping** | **Dict[str, str]** | Required. Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as &#x60;subject&#x60; and &#x60;segment&#x60;. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * &#x60;google.subject&#x60;: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. This is a required field and the mapped subject cannot exceed 127 bytes. * &#x60;google.groups&#x60;: Groups the authenticating user belongs to. You can grant groups access to resources using an IAM &#x60;principalSet&#x60; binding; access applies to all members of the group. * &#x60;google.display_name&#x60;: The name of the authenticated user. This is an optional field and the mapped display name cannot exceed 100 bytes. If not set, &#x60;google.subject&#x60; will be displayed instead. This attribute cannot be referenced in IAM bindings. * &#x60;google.profile_photo&#x60;: The URL that specifies the authenticated user&#39;s thumbnail photo. This is an optional field. When set, the image will be visible as the user&#39;s profile picture. If not set, a generic user icon will be displayed instead. This attribute cannot be referenced in IAM bindings. * &#x60;google.posix_username&#x60;: The linux username used by OS login. This is an optional field and the mapped posix username cannot exceed 32 characters, The key must match the regex \&quot;^a-zA-Z0-9._{0,31}$\&quot;. This attribute cannot be referenced in IAM bindings. You can also provide custom attributes by specifying &#x60;attribute.{custom_attribute}&#x60;, where {custom_attribute} is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workforce pool to Google Cloud resources. For example: * &#x60;google.subject&#x60;: &#x60;principal://iam.googleapis.com/locations/global/workforcePools/{pool}/subject/{value}&#x60; * &#x60;google.groups&#x60;: &#x60;principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/group/{value}&#x60; * &#x60;attribute.{custom_attribute}&#x60;: &#x60;principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/attribute.{custom_attribute}/{value}&#x60; Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the &#x60;assertion&#x60; keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 4KB. For OIDC providers, you must supply a custom mapping that includes the &#x60;google.subject&#x60; attribute. For example, the following maps the &#x60;sub&#x60; claim of the incoming credential to the &#x60;subject&#x60; attribute on a Google token: &#x60;&#x60;&#x60; {\&quot;google.subject\&quot;: \&quot;assertion.sub\&quot;} &#x60;&#x60;&#x60; | [optional] 
**description** | **str** | A user-specified description of the provider. Cannot exceed 256 characters. | [optional] 
**disabled** | **bool** | Disables the workforce pool provider. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. | [optional] 
**display_name** | **str** | A user-specified display name for the provider. Cannot exceed 32 characters. | [optional] 
**expire_time** | **str** | Output only. Time after which the workload pool provider will be permanently purged and cannot be recovered. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the provider. Format: &#x60;locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}&#x60; | [optional] [readonly] 
**oidc** | [**GoogleIamAdminV1WorkforcePoolProviderOidc**](GoogleIamAdminV1WorkforcePoolProviderOidc.md) |  | [optional] 
**saml** | [**GoogleIamAdminV1WorkforcePoolProviderSaml**](GoogleIamAdminV1WorkforcePoolProviderSaml.md) |  | [optional] 
**state** | **str** | Output only. The state of the provider. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workforce_pool_provider import WorkforcePoolProvider

# TODO update the JSON string below
json = "{}"
# create an instance of WorkforcePoolProvider from a JSON string
workforce_pool_provider_instance = WorkforcePoolProvider.from_json(json)
# print the JSON string representation of the object
print(WorkforcePoolProvider.to_json())

# convert the object into a dict
workforce_pool_provider_dict = workforce_pool_provider_instance.to_dict()
# create an instance of WorkforcePoolProvider from a dict
workforce_pool_provider_from_dict = WorkforcePoolProvider.from_dict(workforce_pool_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


