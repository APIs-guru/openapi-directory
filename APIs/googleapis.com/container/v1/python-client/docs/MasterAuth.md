# MasterAuth

The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_certificate** | **str** | [Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint. | [optional] 
**client_certificate_config** | [**ClientCertificateConfig**](ClientCertificateConfig.md) |  | [optional] 
**client_key** | **str** | [Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint. | [optional] 
**cluster_ca_certificate** | **str** | [Output only] Base64-encoded public certificate that is the root of trust for the cluster. | [optional] 
**password** | **str** | The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication | [optional] 
**username** | **str** | The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication | [optional] 

## Example

```python
from openapi_client.models.master_auth import MasterAuth

# TODO update the JSON string below
json = "{}"
# create an instance of MasterAuth from a JSON string
master_auth_instance = MasterAuth.from_json(json)
# print the JSON string representation of the object
print(MasterAuth.to_json())

# convert the object into a dict
master_auth_dict = master_auth_instance.to_dict()
# create an instance of MasterAuth from a dict
master_auth_from_dict = MasterAuth.from_dict(master_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


