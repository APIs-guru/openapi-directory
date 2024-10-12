# OperationReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**List[OperationRead]**](OperationRead.md) |  | 

## Example

```python
from openapi_client.models.operation_read_list import OperationReadList

# TODO update the JSON string below
json = "{}"
# create an instance of OperationReadList from a JSON string
operation_read_list_instance = OperationReadList.from_json(json)
# print the JSON string representation of the object
print(OperationReadList.to_json())

# convert the object into a dict
operation_read_list_dict = operation_read_list_instance.to_dict()
# create an instance of OperationReadList from a dict
operation_read_list_from_dict = OperationReadList.from_dict(operation_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


