# ApplicationMetricDescription

Describes capacity information for a custom resource balancing metric. This can be used to limit the total consumption of this metric by the services of this application. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_capacity** | **int** | The maximum node capacity for Service Fabric application. This is the maximum Load for an instance of this application on a single node. Even if the capacity of node is greater than this value, Service Fabric will limit the total load of services within the application on each node to this value. If set to zero, capacity for this metric is unlimited on each node. When creating a new application with application capacity defined, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity. When updating existing application with application capacity, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.  | [optional] 
**name** | **str** | The name of the metric. | [optional] 
**reservation_capacity** | **int** | The node reservation capacity for Service Fabric application. This is the amount of load which is reserved on nodes which have instances of this application. If MinimumNodes is specified, then the product of these values will be the capacity reserved in the cluster for the application. If set to zero, no capacity is reserved for this metric. When setting application capacity or when updating application capacity; this value must be smaller than or equal to MaximumCapacity for each metric.  | [optional] 
**total_application_capacity** | **int** | The total metric capacity for Service Fabric application. This is the total metric capacity for this application in the cluster. Service Fabric will try to limit the sum of loads of services within the application to this value. When creating a new application with application capacity defined, the product of MaximumNodes and MaximumCapacity must always be smaller than or equal to this value.  | [optional] 

## Example

```python
from openapi_client.models.application_metric_description import ApplicationMetricDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationMetricDescription from a JSON string
application_metric_description_instance = ApplicationMetricDescription.from_json(json)
# print the JSON string representation of the object
print(ApplicationMetricDescription.to_json())

# convert the object into a dict
application_metric_description_dict = application_metric_description_instance.to_dict()
# create an instance of ApplicationMetricDescription from a dict
application_metric_description_from_dict = ApplicationMetricDescription.from_dict(application_metric_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


