# EnterpriseCrmEventbusProtoCombinedCondition

This message recursively combines constituent conditions using logical AND.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[EnterpriseCrmEventbusProtoCondition]**](EnterpriseCrmEventbusProtoCondition.md) | A set of individual constituent conditions. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_combined_condition import EnterpriseCrmEventbusProtoCombinedCondition

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoCombinedCondition from a JSON string
enterprise_crm_eventbus_proto_combined_condition_instance = EnterpriseCrmEventbusProtoCombinedCondition.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoCombinedCondition.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_combined_condition_dict = enterprise_crm_eventbus_proto_combined_condition_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoCombinedCondition from a dict
enterprise_crm_eventbus_proto_combined_condition_from_dict = EnterpriseCrmEventbusProtoCombinedCondition.from_dict(enterprise_crm_eventbus_proto_combined_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


