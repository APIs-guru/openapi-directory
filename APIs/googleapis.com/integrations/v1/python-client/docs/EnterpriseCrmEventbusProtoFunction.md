# EnterpriseCrmEventbusProtoFunction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_type** | [**EnterpriseCrmEventbusProtoFunctionType**](EnterpriseCrmEventbusProtoFunctionType.md) |  | [optional] 
**parameters** | [**List[EnterpriseCrmEventbusProtoTransformExpression]**](EnterpriseCrmEventbusProtoTransformExpression.md) | List of parameters required for the transformation. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_function import EnterpriseCrmEventbusProtoFunction

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoFunction from a JSON string
enterprise_crm_eventbus_proto_function_instance = EnterpriseCrmEventbusProtoFunction.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoFunction.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_function_dict = enterprise_crm_eventbus_proto_function_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoFunction from a dict
enterprise_crm_eventbus_proto_function_from_dict = EnterpriseCrmEventbusProtoFunction.from_dict(enterprise_crm_eventbus_proto_function_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


