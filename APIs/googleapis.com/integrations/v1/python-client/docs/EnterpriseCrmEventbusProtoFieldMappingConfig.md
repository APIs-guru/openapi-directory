# EnterpriseCrmEventbusProtoFieldMappingConfig

Field Mapping Config to map multiple output fields values from input fields values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapped_fields** | [**List[EnterpriseCrmEventbusProtoMappedField]**](EnterpriseCrmEventbusProtoMappedField.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_field_mapping_config import EnterpriseCrmEventbusProtoFieldMappingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoFieldMappingConfig from a JSON string
enterprise_crm_eventbus_proto_field_mapping_config_instance = EnterpriseCrmEventbusProtoFieldMappingConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoFieldMappingConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_field_mapping_config_dict = enterprise_crm_eventbus_proto_field_mapping_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoFieldMappingConfig from a dict
enterprise_crm_eventbus_proto_field_mapping_config_from_dict = EnterpriseCrmEventbusProtoFieldMappingConfig.from_dict(enterprise_crm_eventbus_proto_field_mapping_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


