# BatchAddOrModifyRunResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Dict[str, ErrorResponse]**](ErrorResponse.md) |  | [optional] 
**runs** | [**Dict[str, Run]**](Run.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_add_or_modify_run_result import BatchAddOrModifyRunResult

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAddOrModifyRunResult from a JSON string
batch_add_or_modify_run_result_instance = BatchAddOrModifyRunResult.from_json(json)
# print the JSON string representation of the object
print(BatchAddOrModifyRunResult.to_json())

# convert the object into a dict
batch_add_or_modify_run_result_dict = batch_add_or_modify_run_result_instance.to_dict()
# create an instance of BatchAddOrModifyRunResult from a dict
batch_add_or_modify_run_result_from_dict = BatchAddOrModifyRunResult.from_dict(batch_add_or_modify_run_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


