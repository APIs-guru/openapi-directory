# ServerTlsPolicy

ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource. ServerTlsPolicy in the form accepted by external HTTPS load balancers can be attached only to TargetHttpsProxy with an `EXTERNAL` or `EXTERNAL_MANAGED` load balancing scheme. Traffic Director compatible ServerTlsPolicies can be attached to EndpointPolicy and TargetHttpsProxy with Traffic Director `INTERNAL_SELF_MANAGED` load balancing scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_open** | **bool** | This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if &#x60;allow_open&#x60; and &#x60;mtls_policy&#x60; are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80. | [optional] 
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Free-text description of the resource. | [optional] 
**labels** | **Dict[str, str]** | Set of label tags associated with the resource. | [optional] 
**mtls_policy** | [**MTLSPolicy**](MTLSPolicy.md) |  | [optional] 
**name** | **str** | Required. Name of the ServerTlsPolicy resource. It matches the pattern &#x60;projects/*/locations/{location}/serverTlsPolicies/{server_tls_policy}&#x60; | [optional] 
**server_certificate** | [**GoogleCloudNetworksecurityV1CertificateProvider**](GoogleCloudNetworksecurityV1CertificateProvider.md) |  | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_tls_policy import ServerTlsPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServerTlsPolicy from a JSON string
server_tls_policy_instance = ServerTlsPolicy.from_json(json)
# print the JSON string representation of the object
print(ServerTlsPolicy.to_json())

# convert the object into a dict
server_tls_policy_dict = server_tls_policy_instance.to_dict()
# create an instance of ServerTlsPolicy from a dict
server_tls_policy_from_dict = ServerTlsPolicy.from_dict(server_tls_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


