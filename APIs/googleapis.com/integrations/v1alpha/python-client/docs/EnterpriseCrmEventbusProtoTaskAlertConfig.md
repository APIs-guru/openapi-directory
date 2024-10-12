# EnterpriseCrmEventbusProtoTaskAlertConfig

Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_period** | **str** | The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week). | [optional] 
**alert_disabled** | **bool** | Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert. | [optional] 
**alert_name** | **str** | A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique in within the scope of the containing workflow. | [optional] 
**client_id** | **str** | Client associated with this alert configuration. Must be a client enabled in one of the containing workflow&#39;s triggers. | [optional] 
**duration_threshold_ms** | **str** | Should be specified only for TASK_AVERAGE_DURATION and TASK_PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger. | [optional] 
**error_enum_list** | [**EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList**](EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList.md) |  | [optional] 
**metric_type** | **str** |  | [optional] 
**num_aggregation_periods** | **int** | For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired. | [optional] 
**only_final_attempt** | **bool** | Only count final task attempts, not retries. | [optional] 
**playbook_url** | **str** | Link to a playbook for resolving the issue that triggered this alert. | [optional] 
**threshold_type** | **str** | The threshold type for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired. | [optional] 
**threshold_value** | [**EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue**](EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue.md) |  | [optional] 
**warning_enum_list** | [**EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList**](EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_task_alert_config import EnterpriseCrmEventbusProtoTaskAlertConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTaskAlertConfig from a JSON string
enterprise_crm_eventbus_proto_task_alert_config_instance = EnterpriseCrmEventbusProtoTaskAlertConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTaskAlertConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_task_alert_config_dict = enterprise_crm_eventbus_proto_task_alert_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTaskAlertConfig from a dict
enterprise_crm_eventbus_proto_task_alert_config_from_dict = EnterpriseCrmEventbusProtoTaskAlertConfig.from_dict(enterprise_crm_eventbus_proto_task_alert_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


