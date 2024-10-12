# OperationEntityListResult

The list of bot service operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**value** | [**List[OperationEntity]**](OperationEntity.md) | The list of operations. | [optional] 

## Example

```python
from openapi_client.models.operation_entity_list_result import OperationEntityListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OperationEntityListResult from a JSON string
operation_entity_list_result_instance = OperationEntityListResult.from_json(json)
# print the JSON string representation of the object
print(OperationEntityListResult.to_json())

# convert the object into a dict
operation_entity_list_result_dict = operation_entity_list_result_instance.to_dict()
# create an instance of OperationEntityListResult from a dict
operation_entity_list_result_from_dict = OperationEntityListResult.from_dict(operation_entity_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


