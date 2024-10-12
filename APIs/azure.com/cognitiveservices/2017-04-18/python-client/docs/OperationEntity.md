# OperationEntity

The operation supported by Cognitive Services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**OperationDisplayInfo**](OperationDisplayInfo.md) |  | [optional] 
**name** | **str** | Operation name: {provider}/{resource}/{operation}. | [optional] 
**origin** | **str** | The origin of the operation. | [optional] 
**properties** | **object** | Additional properties. | [optional] 

## Example

```python
from openapi_client.models.operation_entity import OperationEntity

# TODO update the JSON string below
json = "{}"
# create an instance of OperationEntity from a JSON string
operation_entity_instance = OperationEntity.from_json(json)
# print the JSON string representation of the object
print(OperationEntity.to_json())

# convert the object into a dict
operation_entity_dict = operation_entity_instance.to_dict()
# create an instance of OperationEntity from a dict
operation_entity_from_dict = OperationEntity.from_dict(operation_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


