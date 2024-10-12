# ServiceMetricsTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_date** | **str** | The timestamp when the customer service metrics task went into the &lt;code&gt;COMPLETED&lt;/code&gt; or &lt;code&gt;COMPLETED_WITH_ERROR&lt;/code&gt; state. This field is only returned if the status is one of the two completed values. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a &lt;strong&gt;getResultFile&lt;/strong&gt; call to download the report. | [optional] 
**creation_date** | **str** | The date the customer service metrics task was created. | [optional] 
**detail_href** | **str** | The relative &lt;strong&gt;getCustomerServiceMetricTask&lt;/strong&gt; call URI path to retrieve the corresponding task. | [optional] 
**feed_type** | **str** | The feed type associated with the task. | [optional] 
**filter_criteria** | [**CustomerServiceMetricsFilterCriteria**](CustomerServiceMetricsFilterCriteria.md) |  | [optional] 
**schema_version** | **str** | The schema version number of the file format. If omitted, the default value is used. &lt;p&gt;&lt;b&gt;Default value: &lt;/b&gt;&lt;code&gt;1.0&lt;/code&gt;&lt;p&gt; | [optional] 
**status** | **str** | An enumeration value that indicates the state of the task. See &lt;strong&gt;FeedStatusEnum&lt;/strong&gt; for values. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**task_id** | **str** | The unique eBay-assigned ID of the task. | [optional] 

## Example

```python
from openapi_client.models.service_metrics_task import ServiceMetricsTask

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMetricsTask from a JSON string
service_metrics_task_instance = ServiceMetricsTask.from_json(json)
# print the JSON string representation of the object
print(ServiceMetricsTask.to_json())

# convert the object into a dict
service_metrics_task_dict = service_metrics_task_instance.to_dict()
# create an instance of ServiceMetricsTask from a dict
service_metrics_task_from_dict = ServiceMetricsTask.from_dict(service_metrics_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


