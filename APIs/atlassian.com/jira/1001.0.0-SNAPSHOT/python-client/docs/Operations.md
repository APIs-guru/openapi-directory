# Operations

Details of the operations that can be performed on the issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_groups** | [**List[LinkGroup]**](LinkGroup.md) | Details of the link groups defining issue operations. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operations import Operations

# TODO update the JSON string below
json = "{}"
# create an instance of Operations from a JSON string
operations_instance = Operations.from_json(json)
# print the JSON string representation of the object
print(Operations.to_json())

# convert the object into a dict
operations_dict = operations_instance.to_dict()
# create an instance of Operations from a dict
operations_from_dict = Operations.from_dict(operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


