# PrivateServiceConnectConfig

Configuration for using Private Service Connect to establish connectivity between the Data Fusion consumer project and the corresponding tenant project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_unreachable_cidr_block** | **str** | Output only. The CIDR block to which the CDF instance can&#39;t route traffic to in the consumer project VPC. The size of this block is /25. The format of this field is governed by RFC 4632. Example: 240.0.0.0/25 | [optional] [readonly] 
**network_attachment** | **str** | Required. The reference to the network attachment used to establish private connectivity. It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}. | [optional] 
**unreachable_cidr_block** | **str** | Optional. Input only. The CIDR block to which the CDF instance can&#39;t route traffic to in the consumer project VPC. The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment. This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses. If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632. Example: 192.168.0.0/25 | [optional] 

## Example

```python
from openapi_client.models.private_service_connect_config import PrivateServiceConnectConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateServiceConnectConfig from a JSON string
private_service_connect_config_instance = PrivateServiceConnectConfig.from_json(json)
# print the JSON string representation of the object
print(PrivateServiceConnectConfig.to_json())

# convert the object into a dict
private_service_connect_config_dict = private_service_connect_config_instance.to_dict()
# create an instance of PrivateServiceConnectConfig from a dict
private_service_connect_config_from_dict = PrivateServiceConnectConfig.from_dict(private_service_connect_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


