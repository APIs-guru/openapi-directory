# EnterpriseCrmEventbusProtoCondition

Condition that uses `operator` to evaluate the key against the value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_property_key** | **str** | Key that&#39;s evaluated against the &#x60;value&#x60;. Please note the data type of the runtime value associated with the key should match the data type of &#x60;value&#x60;, else an IllegalArgumentException is thrown. | [optional] 
**operator** | **str** | Operator used to evaluate the condition. Please note that an operator with an inappropriate key/value operand will result in IllegalArgumentException, e.g. CONTAINS with boolean key/value pair. | [optional] 
**value** | [**EnterpriseCrmEventbusProtoValueType**](EnterpriseCrmEventbusProtoValueType.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_condition import EnterpriseCrmEventbusProtoCondition

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoCondition from a JSON string
enterprise_crm_eventbus_proto_condition_instance = EnterpriseCrmEventbusProtoCondition.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoCondition.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_condition_dict = enterprise_crm_eventbus_proto_condition_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoCondition from a dict
enterprise_crm_eventbus_proto_condition_from_dict = EnterpriseCrmEventbusProtoCondition.from_dict(enterprise_crm_eventbus_proto_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


