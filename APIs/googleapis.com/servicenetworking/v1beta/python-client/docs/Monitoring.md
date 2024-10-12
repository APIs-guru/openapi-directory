# Monitoring

Monitoring configuration of the service. The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The `library.googleapis.com/book/returned_count` metric is sent to both producer and consumer projects, whereas the `library.googleapis.com/book/num_overdue` metric is only sent to the consumer project. monitored_resources: - type: library.googleapis.com/Branch display_name: \"Library Branch\" description: \"A branch of a library.\" launch_stage: GA labels: - key: resource_container description: \"The Cloud container (ie. project id) for the Branch.\" - key: location description: \"The location of the library branch.\" - key: branch_id description: \"The id of the branch.\" metrics: - name: library.googleapis.com/book/returned_count display_name: \"Books Returned\" description: \"The count of books that have been returned.\" launch_stage: GA metric_kind: DELTA value_type: INT64 unit: \"1\" labels: - key: customer_id description: \"The id of the customer.\" - name: library.googleapis.com/book/num_overdue display_name: \"Books Overdue\" description: \"The current number of overdue books.\" launch_stage: GA metric_kind: GAUGE value_type: INT64 unit: \"1\" labels: - key: customer_id description: \"The id of the customer.\" monitoring: producer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count consumer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count - library.googleapis.com/book/num_overdue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_destinations** | [**List[MonitoringDestination]**](MonitoringDestination.md) | Monitoring configurations for sending metrics to the consumer project. There can be multiple consumer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration. | [optional] 
**producer_destinations** | [**List[MonitoringDestination]**](MonitoringDestination.md) | Monitoring configurations for sending metrics to the producer project. There can be multiple producer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration. | [optional] 

## Example

```python
from openapi_client.models.monitoring import Monitoring

# TODO update the JSON string below
json = "{}"
# create an instance of Monitoring from a JSON string
monitoring_instance = Monitoring.from_json(json)
# print the JSON string representation of the object
print(Monitoring.to_json())

# convert the object into a dict
monitoring_dict = monitoring_instance.to_dict()
# create an instance of Monitoring from a dict
monitoring_from_dict = Monitoring.from_dict(monitoring_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


