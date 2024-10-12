# EnterpriseCrmEventbusProtoCloudKmsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_project_id** | **str** | Optional. The id of GCP project where the KMS key is stored. If not provided, assume the key is stored in the same GCP project defined in Client (tag 14). | [optional] 
**key_name** | **str** | A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. A key exists on exactly one key ring tied to a specific location. | [optional] 
**key_ring_name** | **str** | A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. A key ring&#39;s name does not need to be unique across a Google Cloud project, but must be unique within a given location. | [optional] 
**key_version_name** | **str** | Optional. Each version of a key contains key material used for encryption or signing. A key&#39;s version is represented by an integer, starting at 1. To decrypt data or verify a signature, you must use the same key version that was used to encrypt or sign the data. | [optional] 
**location_name** | **str** | Location name of the key ring, e.g. \&quot;us-west1\&quot;. | [optional] 
**service_account** | **str** | Optional. The service account used for authentication of this KMS key. If this is not provided, the service account in Client.clientSource will be used. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_cloud_kms_config import EnterpriseCrmEventbusProtoCloudKmsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoCloudKmsConfig from a JSON string
enterprise_crm_eventbus_proto_cloud_kms_config_instance = EnterpriseCrmEventbusProtoCloudKmsConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoCloudKmsConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_cloud_kms_config_dict = enterprise_crm_eventbus_proto_cloud_kms_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoCloudKmsConfig from a dict
enterprise_crm_eventbus_proto_cloud_kms_config_from_dict = EnterpriseCrmEventbusProtoCloudKmsConfig.from_dict(enterprise_crm_eventbus_proto_cloud_kms_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


