# EnterpriseCrmEventbusProtoMappedField

Mapped field is a pair of input field and output field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_field** | [**EnterpriseCrmEventbusProtoField**](EnterpriseCrmEventbusProtoField.md) |  | [optional] 
**output_field** | [**EnterpriseCrmEventbusProtoField**](EnterpriseCrmEventbusProtoField.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_mapped_field import EnterpriseCrmEventbusProtoMappedField

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoMappedField from a JSON string
enterprise_crm_eventbus_proto_mapped_field_instance = EnterpriseCrmEventbusProtoMappedField.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoMappedField.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_mapped_field_dict = enterprise_crm_eventbus_proto_mapped_field_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoMappedField from a dict
enterprise_crm_eventbus_proto_mapped_field_from_dict = EnterpriseCrmEventbusProtoMappedField.from_dict(enterprise_crm_eventbus_proto_mapped_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


