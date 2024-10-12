# EnterpriseCrmEventbusProtoBaseValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_function** | [**EnterpriseCrmEventbusProtoFunction**](EnterpriseCrmEventbusProtoFunction.md) |  | [optional] 
**literal_value** | [**EnterpriseCrmEventbusProtoParameterValueType**](EnterpriseCrmEventbusProtoParameterValueType.md) |  | [optional] 
**reference_value** | **str** | Start with a reference value to dereference. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_base_value import EnterpriseCrmEventbusProtoBaseValue

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoBaseValue from a JSON string
enterprise_crm_eventbus_proto_base_value_instance = EnterpriseCrmEventbusProtoBaseValue.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoBaseValue.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_base_value_dict = enterprise_crm_eventbus_proto_base_value_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoBaseValue from a dict
enterprise_crm_eventbus_proto_base_value_from_dict = EnterpriseCrmEventbusProtoBaseValue.from_dict(enterprise_crm_eventbus_proto_base_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


