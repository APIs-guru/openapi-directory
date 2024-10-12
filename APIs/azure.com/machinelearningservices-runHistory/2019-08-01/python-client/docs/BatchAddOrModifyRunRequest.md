# BatchAddOrModifyRunRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runs** | [**List[CreateRun]**](CreateRun.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_add_or_modify_run_request import BatchAddOrModifyRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAddOrModifyRunRequest from a JSON string
batch_add_or_modify_run_request_instance = BatchAddOrModifyRunRequest.from_json(json)
# print the JSON string representation of the object
print(BatchAddOrModifyRunRequest.to_json())

# convert the object into a dict
batch_add_or_modify_run_request_dict = batch_add_or_modify_run_request_instance.to_dict()
# create an instance of BatchAddOrModifyRunRequest from a dict
batch_add_or_modify_run_request_from_dict = BatchAddOrModifyRunRequest.from_dict(batch_add_or_modify_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


