# CreateServiceMetricsTaskRequest

The type that defines the fields for the Customer Service Metric reports generated with the Feed API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed_type** | **str** | The &lt;strong&gt;feedType&lt;/strong&gt; specified for the task. The report lists the transaction details that contribute to the service metrics evaluation. Supported types include:&lt;p&gt;&lt;code&gt;CUSTOMER_SERVICE_METRICS_REPORT&lt;/code&gt;&lt;/p&gt; | [optional] 
**filter_criteria** | [**CustomerServiceMetricsFilterCriteria**](CustomerServiceMetricsFilterCriteria.md) |  | [optional] 
**schema_version** | **str** | The version number of the file format. &lt;p&gt;&lt;b&gt;Valid value: &lt;/b&gt;&lt;code&gt;1.0&lt;/code&gt;&lt;p&gt; | [optional] 

## Example

```python
from openapi_client.models.create_service_metrics_task_request import CreateServiceMetricsTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateServiceMetricsTaskRequest from a JSON string
create_service_metrics_task_request_instance = CreateServiceMetricsTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateServiceMetricsTaskRequest.to_json())

# convert the object into a dict
create_service_metrics_task_request_dict = create_service_metrics_task_request_instance.to_dict()
# create an instance of CreateServiceMetricsTaskRequest from a dict
create_service_metrics_task_request_from_dict = CreateServiceMetricsTaskRequest.from_dict(create_service_metrics_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


