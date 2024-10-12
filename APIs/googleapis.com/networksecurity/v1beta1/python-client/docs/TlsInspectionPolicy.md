# TlsInspectionPolicy

The TlsInspectionPolicy resource contains references to CA pools in Certificate Authority Service and associated metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_pool** | **str** | Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form \&quot;projects/{project}/locations/{location}/caPools/{ca_pool}\&quot;. | [optional] 
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**custom_tls_features** | **List[str]** | Optional. List of custom TLS cipher suites selected. This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field. | [optional] 
**description** | **str** | Optional. Free-text description of the resource. | [optional] 
**exclude_public_ca_set** | **bool** | Optional. If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trust_config. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trust_config will be accepted. This defaults to FALSE (use public CAs in addition to trust_config) for backwards compatibility, but trusting public root CAs is *not recommended* unless the traffic in question is outbound to public web servers. When possible, prefer setting this to \&quot;false\&quot; and explicitly specifying trusted CAs and certificates in a TrustConfig. Note that Secure Web Proxy does not yet honor this field. | [optional] 
**min_tls_version** | **str** | Optional. Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. | [optional] 
**name** | **str** | Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). | [optional] 
**tls_feature_profile** | **str** | Optional. The selected Profile. If this is not set, then the default value is to allow the broadest set of clients and servers (\&quot;PROFILE_COMPATIBLE\&quot;). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. | [optional] 
**trust_config** | **str** | Optional. A TrustConfig resource used when making a connection to the TLS server. This is a relative resource path following the form \&quot;projects/{project}/locations/{location}/trustConfigs/{trust_config}\&quot;. This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Note that Secure Web Proxy does not yet honor this field. | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tls_inspection_policy import TlsInspectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of TlsInspectionPolicy from a JSON string
tls_inspection_policy_instance = TlsInspectionPolicy.from_json(json)
# print the JSON string representation of the object
print(TlsInspectionPolicy.to_json())

# convert the object into a dict
tls_inspection_policy_dict = tls_inspection_policy_instance.to_dict()
# create an instance of TlsInspectionPolicy from a dict
tls_inspection_policy_from_dict = TlsInspectionPolicy.from_dict(tls_inspection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


