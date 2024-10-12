# EkmConnection

An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which the EkmConnection was created. | [optional] [readonly] 
**crypto_space_path** | **str** | Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS. | [optional] 
**etag** | **str** | Optional. Etag of the currently stored EkmConnection. | [optional] 
**key_management_mode** | **str** | Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL. | [optional] 
**name** | **str** | Output only. The resource name for the EkmConnection in the format &#x60;projects/*/locations/*/ekmConnections/*&#x60;. | [optional] [readonly] 
**service_resolvers** | [**List[ServiceResolver]**](ServiceResolver.md) | A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported. | [optional] 

## Example

```python
from openapi_client.models.ekm_connection import EkmConnection

# TODO update the JSON string below
json = "{}"
# create an instance of EkmConnection from a JSON string
ekm_connection_instance = EkmConnection.from_json(json)
# print the JSON string representation of the object
print(EkmConnection.to_json())

# convert the object into a dict
ekm_connection_dict = ekm_connection_instance.to_dict()
# create an instance of EkmConnection from a dict
ekm_connection_from_dict = EkmConnection.from_dict(ekm_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


