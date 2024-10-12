# IntegrationRuntimesGetConnectionInfo200Response

Connection information for encrypting the on-premises data source credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_service_uri** | **str** | The on-premises integration runtime host URL. | [optional] [readonly] 
**identity_cert_thumbprint** | **str** | The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation. | [optional] [readonly] 
**is_identity_cert_exprired** | **bool** | Whether the identity certificate is expired. | [optional] [readonly] 
**public_key** | **str** | The public key for encrypting a credential when transferring the credential to the integration runtime. | [optional] [readonly] 
**service_token** | **str** | The token generated in service. Callers use this token to authenticate to integration runtime. | [optional] [readonly] 
**version** | **str** | The integration runtime version. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_runtimes_get_connection_info200_response import IntegrationRuntimesGetConnectionInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimesGetConnectionInfo200Response from a JSON string
integration_runtimes_get_connection_info200_response_instance = IntegrationRuntimesGetConnectionInfo200Response.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimesGetConnectionInfo200Response.to_json())

# convert the object into a dict
integration_runtimes_get_connection_info200_response_dict = integration_runtimes_get_connection_info200_response_instance.to_dict()
# create an instance of IntegrationRuntimesGetConnectionInfo200Response from a dict
integration_runtimes_get_connection_info200_response_from_dict = IntegrationRuntimesGetConnectionInfo200Response.from_dict(integration_runtimes_get_connection_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


