# LoggingDestination

Configuration of a specific logging destination (the producer project or the consumer project).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | **List[str]** | Names of the logs to be sent to this destination. Each name must be defined in the Service.logs section. If the log name is not a domain scoped name, it will be automatically prefixed with the service name followed by \&quot;/\&quot;. | [optional] 
**monitored_resource** | **str** | The monitored resource type. The type must be defined in the Service.monitored_resources section. | [optional] 

## Example

```python
from openapi_client.models.logging_destination import LoggingDestination

# TODO update the JSON string below
json = "{}"
# create an instance of LoggingDestination from a JSON string
logging_destination_instance = LoggingDestination.from_json(json)
# print the JSON string representation of the object
print(LoggingDestination.to_json())

# convert the object into a dict
logging_destination_dict = logging_destination_instance.to_dict()
# create an instance of LoggingDestination from a dict
logging_destination_from_dict = LoggingDestination.from_dict(logging_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


