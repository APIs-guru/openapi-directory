# Gateway

Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway. Next id: 32

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **List[str]** | Optional. Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. When no address is provided, an IP from the subnetwork is allocated This field only applies to gateways of type &#39;SECURE_WEB_GATEWAY&#39;. Gateways of type &#39;OPEN_MESH&#39; listen on 0.0.0.0 for IPv4 and :: for IPv6. | [optional] 
**certificate_urls** | **List[str]** | Optional. A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection. This feature only applies to gateways of type &#39;SECURE_WEB_GATEWAY&#39;. | [optional] 
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. A free-text description of the resource. Max length 1024 characters. | [optional] 
**envoy_headers** | **str** | Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers. | [optional] 
**gateway_security_policy** | **str** | Optional. A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections. For example: &#x60;projects/*/locations/*/gatewaySecurityPolicies/swg-policy&#x60;. This policy is specific to gateways of type &#39;SECURE_WEB_GATEWAY&#39;. | [optional] 
**ip_version** | **str** | Optional. The IP Version that will be used by this gateway. Valid options are IPV4 or IPV6. Default is IPV4. | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the Gateway resource. | [optional] 
**name** | **str** | Required. Name of the Gateway resource. It matches pattern &#x60;projects/*/locations/*/gateways/&#x60;. | [optional] 
**network** | **str** | Optional. The relative resource name identifying the VPC network that is using this configuration. For example: &#x60;projects/*/global/networks/network-1&#x60;. Currently, this field is specific to gateways of type &#39;SECURE_WEB_GATEWAY&#39;. | [optional] 
**ports** | **List[int]** | Required. One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports. Gateways of type &#39;SECURE_WEB_GATEWAY&#39; are limited to 1 port. Gateways of type &#39;OPEN_MESH&#39; listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports. | [optional] 
**scope** | **str** | Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens. | [optional] 
**self_link** | **str** | Output only. Server-defined URL of this resource | [optional] [readonly] 
**server_tls_policy** | **str** | Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. | [optional] 
**subnetwork** | **str** | Optional. The relative resource name identifying the subnetwork in which this SWG is allocated. For example: &#x60;projects/*/regions/us-central1/subnetworks/network-1&#x60; Currently, this field is specific to gateways of type &#39;SECURE_WEB_GATEWAY\&quot;. | [optional] 
**type** | **str** | Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned. | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gateway import Gateway

# TODO update the JSON string below
json = "{}"
# create an instance of Gateway from a JSON string
gateway_instance = Gateway.from_json(json)
# print the JSON string representation of the object
print(Gateway.to_json())

# convert the object into a dict
gateway_dict = gateway_instance.to_dict()
# create an instance of Gateway from a dict
gateway_from_dict = Gateway.from_dict(gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


