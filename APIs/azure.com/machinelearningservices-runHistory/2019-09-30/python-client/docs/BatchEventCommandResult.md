# BatchEventCommandResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[KeyValuePairBaseEventErrorResponse]**](KeyValuePairBaseEventErrorResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_event_command_result import BatchEventCommandResult

# TODO update the JSON string below
json = "{}"
# create an instance of BatchEventCommandResult from a JSON string
batch_event_command_result_instance = BatchEventCommandResult.from_json(json)
# print the JSON string representation of the object
print(BatchEventCommandResult.to_json())

# convert the object into a dict
batch_event_command_result_dict = batch_event_command_result_instance.to_dict()
# create an instance of BatchEventCommandResult from a dict
batch_event_command_result_from_dict = BatchEventCommandResult.from_dict(batch_event_command_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


