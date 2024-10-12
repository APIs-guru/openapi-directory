# EnterpriseCrmEventbusProtoTransformExpression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_value** | [**EnterpriseCrmEventbusProtoBaseValue**](EnterpriseCrmEventbusProtoBaseValue.md) |  | [optional] 
**transformation_functions** | [**List[EnterpriseCrmEventbusProtoFunction]**](EnterpriseCrmEventbusProtoFunction.md) | Transformations to be applied sequentially. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_transform_expression import EnterpriseCrmEventbusProtoTransformExpression

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoTransformExpression from a JSON string
enterprise_crm_eventbus_proto_transform_expression_instance = EnterpriseCrmEventbusProtoTransformExpression.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoTransformExpression.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_transform_expression_dict = enterprise_crm_eventbus_proto_transform_expression_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoTransformExpression from a dict
enterprise_crm_eventbus_proto_transform_expression_from_dict = EnterpriseCrmEventbusProtoTransformExpression.from_dict(enterprise_crm_eventbus_proto_transform_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


