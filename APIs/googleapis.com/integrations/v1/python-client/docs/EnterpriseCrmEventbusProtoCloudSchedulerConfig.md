# EnterpriseCrmEventbusProtoCloudSchedulerConfig

Cloud Scheduler Trigger configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron_tab** | **str** | Required. The cron tab of cloud scheduler trigger. | [optional] 
**error_message** | **str** | Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations | [optional] 
**location** | **str** | Required. The location where associated cloud scheduler job will be created | [optional] 
**service_account_email** | **str** | Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_cloud_scheduler_config import EnterpriseCrmEventbusProtoCloudSchedulerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoCloudSchedulerConfig from a JSON string
enterprise_crm_eventbus_proto_cloud_scheduler_config_instance = EnterpriseCrmEventbusProtoCloudSchedulerConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoCloudSchedulerConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_cloud_scheduler_config_dict = enterprise_crm_eventbus_proto_cloud_scheduler_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoCloudSchedulerConfig from a dict
enterprise_crm_eventbus_proto_cloud_scheduler_config_from_dict = EnterpriseCrmEventbusProtoCloudSchedulerConfig.from_dict(enterprise_crm_eventbus_proto_cloud_scheduler_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


