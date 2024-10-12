# Logging

Logging configuration of the service. The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project. monitored_resources: - type: library.googleapis.com/branch labels: - key: /city description: The city where the library branch is located in. - key: /name description: The name of the branch. logs: - name: activity_history labels: - key: /customer_id - name: purchase_history logging: producer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history - purchase_history consumer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_destinations** | [**List[LoggingDestination]**](LoggingDestination.md) | Logging configurations for sending logs to the consumer project. There can be multiple consumer destinations, each one must have a different monitored resource type. A log can be used in at most one consumer destination. | [optional] 
**producer_destinations** | [**List[LoggingDestination]**](LoggingDestination.md) | Logging configurations for sending logs to the producer project. There can be multiple producer destinations, each one must have a different monitored resource type. A log can be used in at most one producer destination. | [optional] 

## Example

```python
from openapi_client.models.logging import Logging

# TODO update the JSON string below
json = "{}"
# create an instance of Logging from a JSON string
logging_instance = Logging.from_json(json)
# print the JSON string representation of the object
print(Logging.to_json())

# convert the object into a dict
logging_dict = logging_instance.to_dict()
# create an instance of Logging from a dict
logging_from_dict = Logging.from_dict(logging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


