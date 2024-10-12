# EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue

The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute** | **str** |  | [optional] 
**percentage** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_base_alert_config_threshold_value import EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue from a JSON string
enterprise_crm_eventbus_proto_base_alert_config_threshold_value_instance = EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_base_alert_config_threshold_value_dict = enterprise_crm_eventbus_proto_base_alert_config_threshold_value_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue from a dict
enterprise_crm_eventbus_proto_base_alert_config_threshold_value_from_dict = EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue.from_dict(enterprise_crm_eventbus_proto_base_alert_config_threshold_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


