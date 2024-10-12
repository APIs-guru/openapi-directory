# EnterpriseCrmEventbusProtoTaskMetadataAdmin

Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_group_email** | **str** |  | [optional] 
**user_email** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_task_metadata_admin import EnterpriseCrmEventbusProtoTaskMetadataAdmin

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTaskMetadataAdmin from a JSON string
enterprise_crm_eventbus_proto_task_metadata_admin_instance = EnterpriseCrmEventbusProtoTaskMetadataAdmin.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTaskMetadataAdmin.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_task_metadata_admin_dict = enterprise_crm_eventbus_proto_task_metadata_admin_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTaskMetadataAdmin from a dict
enterprise_crm_eventbus_proto_task_metadata_admin_from_dict = EnterpriseCrmEventbusProtoTaskMetadataAdmin.from_dict(enterprise_crm_eventbus_proto_task_metadata_admin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


