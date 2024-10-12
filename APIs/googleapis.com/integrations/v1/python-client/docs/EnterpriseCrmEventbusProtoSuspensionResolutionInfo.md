# EnterpriseCrmEventbusProtoSuspensionResolutionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit** | [**EnterpriseCrmEventbusProtoSuspensionResolutionInfoAudit**](EnterpriseCrmEventbusProtoSuspensionResolutionInfoAudit.md) |  | [optional] 
**client_id** | **str** | The event data user sends as request. | [optional] 
**cloud_kms_config** | [**EnterpriseCrmEventbusProtoCloudKmsConfig**](EnterpriseCrmEventbusProtoCloudKmsConfig.md) |  | [optional] 
**created_timestamp** | **str** | Auto-generated. | [optional] 
**encrypted_suspension_resolution_info** | **bytearray** | Encrypted SuspensionResolutionInfo | [optional] 
**event_execution_info_id** | **str** | Required. ID of the associated execution. | [optional] 
**external_traffic** | [**EnterpriseCrmEventbusProtoExternalTraffic**](EnterpriseCrmEventbusProtoExternalTraffic.md) |  | [optional] 
**last_modified_timestamp** | **str** | Auto-generated. | [optional] 
**product** | **str** | Which Google product the suspension belongs to. If not set, the suspension belongs to Integration Platform by default. | [optional] 
**status** | **str** |  | [optional] 
**suspension_config** | [**EnterpriseCrmEventbusProtoSuspensionConfig**](EnterpriseCrmEventbusProtoSuspensionConfig.md) |  | [optional] 
**suspension_id** | **str** | Primary key for the SuspensionResolutionInfoTable. | [optional] 
**task_number** | **str** | Required. Task number of the associated SuspensionTask. | [optional] 
**workflow_name** | **str** | Required. The name of the originating workflow. | [optional] 
**wrapped_dek** | **bytearray** | Wrapped dek | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_suspension_resolution_info import EnterpriseCrmEventbusProtoSuspensionResolutionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoSuspensionResolutionInfo from a JSON string
enterprise_crm_eventbus_proto_suspension_resolution_info_instance = EnterpriseCrmEventbusProtoSuspensionResolutionInfo.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoSuspensionResolutionInfo.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_suspension_resolution_info_dict = enterprise_crm_eventbus_proto_suspension_resolution_info_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoSuspensionResolutionInfo from a dict
enterprise_crm_eventbus_proto_suspension_resolution_info_from_dict = EnterpriseCrmEventbusProtoSuspensionResolutionInfo.from_dict(enterprise_crm_eventbus_proto_suspension_resolution_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


