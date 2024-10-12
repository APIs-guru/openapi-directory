# MetricsScope

Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when this Metrics Scope was created. | [optional] [readonly] 
**monitored_projects** | [**List[MonitoredProject]**](MonitoredProject.md) | Output only. The list of projects monitored by this Metrics Scope. | [optional] [readonly] 
**name** | **str** | Immutable. The resource name of the Monitoring Metrics Scope. On input, the resource name can be specified with the scoping project ID or number. On output, the resource name is specified with the scoping project number. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} | [optional] 
**update_time** | **str** | Output only. The time when this Metrics Scope record was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metrics_scope import MetricsScope

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsScope from a JSON string
metrics_scope_instance = MetricsScope.from_json(json)
# print the JSON string representation of the object
print(MetricsScope.to_json())

# convert the object into a dict
metrics_scope_dict = metrics_scope_instance.to_dict()
# create an instance of MetricsScope from a dict
metrics_scope_from_dict = MetricsScope.from_dict(metrics_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


