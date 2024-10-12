# EndpointPolicy

EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply \"authentication config\" an all endpoints that serve on port 8080.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_policy** | **str** | Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint. | [optional] 
**client_tls_policy** | **str** | Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY. | [optional] 
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. A free-text description of the resource. Max length 1024 characters. | [optional] 
**endpoint_matcher** | [**EndpointMatcher**](EndpointMatcher.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the EndpointPolicy resource. | [optional] 
**name** | **str** | Required. Name of the EndpointPolicy resource. It matches pattern &#x60;projects/{project}/locations/global/endpointPolicies/{endpoint_policy}&#x60;. | [optional] 
**server_tls_policy** | **str** | Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint. | [optional] 
**traffic_port_selector** | [**TrafficPortSelector**](TrafficPortSelector.md) |  | [optional] 
**type** | **str** | Required. The type of endpoint policy. This is primarily used to validate the configuration. | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoint_policy import EndpointPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPolicy from a JSON string
endpoint_policy_instance = EndpointPolicy.from_json(json)
# print the JSON string representation of the object
print(EndpointPolicy.to_json())

# convert the object into a dict
endpoint_policy_dict = endpoint_policy_instance.to_dict()
# create an instance of EndpointPolicy from a dict
endpoint_policy_from_dict = EndpointPolicy.from_dict(endpoint_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


