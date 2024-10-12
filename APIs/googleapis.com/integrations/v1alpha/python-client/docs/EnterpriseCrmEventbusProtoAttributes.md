# EnterpriseCrmEventbusProtoAttributes

Attributes are additional options that can be associated with each event property. For more information, see

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Things like URL, Email, Currency, Timestamp (rather than string, int64...) | [optional] 
**default_value** | [**EnterpriseCrmEventbusProtoValueType**](EnterpriseCrmEventbusProtoValueType.md) |  | [optional] 
**is_required** | **bool** | Required for event execution. The validation will be done by the event bus when the event is triggered. | [optional] 
**is_searchable** | **bool** | Used to indicate if a ParameterEntry should be converted to ParamIndexes for ST-Spanner full-text search. DEPRECATED: use searchable. | [optional] 
**log_settings** | [**EnterpriseCrmEventbusProtoLogSettings**](EnterpriseCrmEventbusProtoLogSettings.md) |  | [optional] 
**searchable** | **str** |  | [optional] 
**task_visibility** | **List[str]** | List of tasks that can view this property, if empty then all. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_attributes import EnterpriseCrmEventbusProtoAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoAttributes from a JSON string
enterprise_crm_eventbus_proto_attributes_instance = EnterpriseCrmEventbusProtoAttributes.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoAttributes.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_attributes_dict = enterprise_crm_eventbus_proto_attributes_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoAttributes from a dict
enterprise_crm_eventbus_proto_attributes_from_dict = EnterpriseCrmEventbusProtoAttributes.from_dict(enterprise_crm_eventbus_proto_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


