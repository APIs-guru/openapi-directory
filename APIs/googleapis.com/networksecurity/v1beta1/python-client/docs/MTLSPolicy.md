# MTLSPolicy

Specification of the MTLSPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_validation_ca** | [**List[ValidationCA]**](ValidationCA.md) | Required if the policy is to be used with Traffic Director. For external HTTPS load balancers it must be empty. Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate. | [optional] 
**client_validation_mode** | **str** | When the client presents an invalid certificate or no certificate to the load balancer, the &#x60;client_validation_mode&#x60; specifies how the client connection is handled. Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. | [optional] 
**client_validation_trust_config** | **str** | Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers. | [optional] 

## Example

```python
from openapi_client.models.mtls_policy import MTLSPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of MTLSPolicy from a JSON string
mtls_policy_instance = MTLSPolicy.from_json(json)
# print the JSON string representation of the object
print(MTLSPolicy.to_json())

# convert the object into a dict
mtls_policy_dict = mtls_policy_instance.to_dict()
# create an instance of MTLSPolicy from a dict
mtls_policy_from_dict = MTLSPolicy.from_dict(mtls_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


