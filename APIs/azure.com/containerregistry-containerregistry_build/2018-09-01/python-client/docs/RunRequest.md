# RunRequest

The request parameters for scheduling a run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_archive_enabled** | **bool** | The value that indicates whether archiving is enabled for the run or not. | [optional] [default to False]
**type** | **str** | The type of the run request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.run_request import RunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunRequest from a JSON string
run_request_instance = RunRequest.from_json(json)
# print the JSON string representation of the object
print(RunRequest.to_json())

# convert the object into a dict
run_request_dict = run_request_instance.to_dict()
# create an instance of RunRequest from a dict
run_request_from_dict = RunRequest.from_dict(run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


