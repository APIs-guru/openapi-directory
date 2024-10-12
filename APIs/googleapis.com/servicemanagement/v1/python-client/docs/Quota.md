# Quota

Quota configuration helps to achieve fairness and budgeting in service usage. The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with corresponding costs. - The quota.limits defines limits on the metrics, which will be used for quota checks at runtime. An example quota configuration in yaml format: quota: limits: - name: apiWriteQpsPerProject metric: library.googleapis.com/write_calls unit: \"1/min/{project}\" # rate limit for consumer projects values: STANDARD: 10000 (The metric rules bind all methods to the read_calls metric, except for the UpdateBook and DeleteBook methods. These two methods are mapped to the write_calls metric, with the UpdateBook method consuming at twice rate as the DeleteBook method.) metric_rules: - selector: \"*\" metric_costs: library.googleapis.com/read_calls: 1 - selector: google.example.library.v1.LibraryService.UpdateBook metric_costs: library.googleapis.com/write_calls: 2 - selector: google.example.library.v1.LibraryService.DeleteBook metric_costs: library.googleapis.com/write_calls: 1 Corresponding Metric definition: metrics: - name: library.googleapis.com/read_calls display_name: Read requests metric_kind: DELTA value_type: INT64 - name: library.googleapis.com/write_calls display_name: Write requests metric_kind: DELTA value_type: INT64 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limits** | [**List[QuotaLimit]**](QuotaLimit.md) | List of QuotaLimit definitions for the service. | [optional] 
**metric_rules** | [**List[MetricRule]**](MetricRule.md) | List of MetricRule definitions, each one mapping a selected method to one or more metrics. | [optional] 

## Example

```python
from openapi_client.models.quota import Quota

# TODO update the JSON string below
json = "{}"
# create an instance of Quota from a JSON string
quota_instance = Quota.from_json(json)
# print the JSON string representation of the object
print(Quota.to_json())

# convert the object into a dict
quota_dict = quota_instance.to_dict()
# create an instance of Quota from a dict
quota_from_dict = Quota.from_dict(quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


