# ServiceLoadMetricDescription

Specifies a metric to load balance a service during runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_load** | **int** | Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric. | [optional] 
**name** | **str** | The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case-sensitive. | 
**primary_default_load** | **int** | Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica. | [optional] 
**secondary_default_load** | **int** | Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica. | [optional] 
**weight** | [**ServiceLoadMetricWeight**](ServiceLoadMetricWeight.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_load_metric_description import ServiceLoadMetricDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLoadMetricDescription from a JSON string
service_load_metric_description_instance = ServiceLoadMetricDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceLoadMetricDescription.to_json())

# convert the object into a dict
service_load_metric_description_dict = service_load_metric_description_instance.to_dict()
# create an instance of ServiceLoadMetricDescription from a dict
service_load_metric_description_from_dict = ServiceLoadMetricDescription.from_dict(service_load_metric_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


