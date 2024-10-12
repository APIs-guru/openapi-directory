# BatchEventCommand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[BaseEvent]**](BaseEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_event_command import BatchEventCommand

# TODO update the JSON string below
json = "{}"
# create an instance of BatchEventCommand from a JSON string
batch_event_command_instance = BatchEventCommand.from_json(json)
# print the JSON string representation of the object
print(BatchEventCommand.to_json())

# convert the object into a dict
batch_event_command_dict = batch_event_command_instance.to_dict()
# create an instance of BatchEventCommand from a dict
batch_event_command_from_dict = BatchEventCommand.from_dict(batch_event_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


