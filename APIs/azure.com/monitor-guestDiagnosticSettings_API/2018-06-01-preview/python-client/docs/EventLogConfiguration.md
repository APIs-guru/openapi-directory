# EventLogConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** |  | [optional] 
**log_name** | **str** |  | 

## Example

```python
from openapi_client.models.event_log_configuration import EventLogConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of EventLogConfiguration from a JSON string
event_log_configuration_instance = EventLogConfiguration.from_json(json)
# print the JSON string representation of the object
print(EventLogConfiguration.to_json())

# convert the object into a dict
event_log_configuration_dict = event_log_configuration_instance.to_dict()
# create an instance of EventLogConfiguration from a dict
event_log_configuration_from_dict = EventLogConfiguration.from_dict(event_log_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


