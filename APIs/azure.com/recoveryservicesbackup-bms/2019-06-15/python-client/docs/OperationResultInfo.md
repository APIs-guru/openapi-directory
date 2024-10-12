# OperationResultInfo

Operation result info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_list** | **List[str]** | List of jobs created by this operation. | [optional] 

## Example

```python
from openapi_client.models.operation_result_info import OperationResultInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultInfo from a JSON string
operation_result_info_instance = OperationResultInfo.from_json(json)
# print the JSON string representation of the object
print(OperationResultInfo.to_json())

# convert the object into a dict
operation_result_info_dict = operation_result_info_instance.to_dict()
# create an instance of OperationResultInfo from a dict
operation_result_info_from_dict = OperationResultInfo.from_dict(operation_result_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


