# EnterpriseCrmEventbusProtoLogSettings

The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_field_name** | **str** | The name of corresponding logging field of the event property. If omitted, assumes the same name as the event property key. | [optional] 
**sanitize_options** | [**EnterpriseCrmLoggingGwsSanitizeOptions**](EnterpriseCrmLoggingGwsSanitizeOptions.md) |  | [optional] 
**seed_period** | **str** |  | [optional] 
**seed_scope** | **str** |  | [optional] 
**shortening_limits** | [**EnterpriseCrmLoggingGwsFieldLimits**](EnterpriseCrmLoggingGwsFieldLimits.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_log_settings import EnterpriseCrmEventbusProtoLogSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoLogSettings from a JSON string
enterprise_crm_eventbus_proto_log_settings_instance = EnterpriseCrmEventbusProtoLogSettings.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoLogSettings.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_log_settings_dict = enterprise_crm_eventbus_proto_log_settings_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoLogSettings from a dict
enterprise_crm_eventbus_proto_log_settings_from_dict = EnterpriseCrmEventbusProtoLogSettings.from_dict(enterprise_crm_eventbus_proto_log_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


