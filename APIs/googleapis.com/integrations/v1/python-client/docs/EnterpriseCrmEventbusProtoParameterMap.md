# EnterpriseCrmEventbusProtoParameterMap

A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[EnterpriseCrmEventbusProtoParameterMapEntry]**](EnterpriseCrmEventbusProtoParameterMapEntry.md) |  | [optional] 
**key_type** | **str** | Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this. | [optional] 
**value_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_parameter_map import EnterpriseCrmEventbusProtoParameterMap

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoParameterMap from a JSON string
enterprise_crm_eventbus_proto_parameter_map_instance = EnterpriseCrmEventbusProtoParameterMap.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoParameterMap.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_parameter_map_dict = enterprise_crm_eventbus_proto_parameter_map_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoParameterMap from a dict
enterprise_crm_eventbus_proto_parameter_map_from_dict = EnterpriseCrmEventbusProtoParameterMap.from_dict(enterprise_crm_eventbus_proto_parameter_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


