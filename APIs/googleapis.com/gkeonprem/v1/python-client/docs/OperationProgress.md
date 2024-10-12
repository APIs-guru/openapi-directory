# OperationProgress

Information about operation progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stages** | [**List[OperationStage]**](OperationStage.md) | The stages of the operation. | [optional] 

## Example

```python
from openapi_client.models.operation_progress import OperationProgress

# TODO update the JSON string below
json = "{}"
# create an instance of OperationProgress from a JSON string
operation_progress_instance = OperationProgress.from_json(json)
# print the JSON string representation of the object
print(OperationProgress.to_json())

# convert the object into a dict
operation_progress_dict = operation_progress_instance.to_dict()
# create an instance of OperationProgress from a dict
operation_progress_from_dict = OperationProgress.from_dict(operation_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


