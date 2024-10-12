# ChangeStreamConfig

Change stream configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_period** | **str** | How long the change stream should be retained. Change stream data older than the retention period will not be returned when reading the change stream from the table. Values must be at least 1 day and at most 7 days, and will be truncated to microsecond granularity. | [optional] 

## Example

```python
from openapi_client.models.change_stream_config import ChangeStreamConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeStreamConfig from a JSON string
change_stream_config_instance = ChangeStreamConfig.from_json(json)
# print the JSON string representation of the object
print(ChangeStreamConfig.to_json())

# convert the object into a dict
change_stream_config_dict = change_stream_config_instance.to_dict()
# create an instance of ChangeStreamConfig from a dict
change_stream_config_from_dict = ChangeStreamConfig.from_dict(change_stream_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


