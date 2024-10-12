# JobMetrics

JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. For more information, see [Dataflow job metrics] (https://cloud.google.com/dataflow/docs/guides/using-monitoring-intf). This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_time** | **str** | Timestamp as of which metric values are current. | [optional] 
**metrics** | [**List[MetricUpdate]**](MetricUpdate.md) | All metrics for this job. | [optional] 

## Example

```python
from openapi_client.models.job_metrics import JobMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of JobMetrics from a JSON string
job_metrics_instance = JobMetrics.from_json(json)
# print the JSON string representation of the object
print(JobMetrics.to_json())

# convert the object into a dict
job_metrics_dict = job_metrics_instance.to_dict()
# create an instance of JobMetrics from a dict
job_metrics_from_dict = JobMetrics.from_dict(job_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


