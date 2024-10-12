# Operation

Represents information regarding an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_id** | **str** | Identity of the consumer who is using the service. This field should be filled in for the operations initiated by a consumer, but not for service-initiated operations that are not related to a specific consumer. - This can be in one of the following formats: - project:PROJECT_ID, - project&#x60;_&#x60;number:PROJECT_NUMBER, - projects/PROJECT_ID or PROJECT_NUMBER, - folders/FOLDER_NUMBER, - organizations/ORGANIZATION_NUMBER, - api&#x60;_&#x60;key:API_KEY. | [optional] 
**end_time** | **str** | End time of the operation. Required when the operation is used in ServiceController.Report, but optional when the operation is used in ServiceController.Check. | [optional] 
**importance** | **str** | DO NOT USE. This is an experimental field. | [optional] 
**labels** | **Dict[str, str]** | Labels describing the operation. Only the following labels are allowed: - Labels describing monitored resources as defined in the service configuration. - Default labels of metric values. When specified, labels defined in the metric value override these default. - The following labels defined by Google Cloud Platform: - &#x60;cloud.googleapis.com/location&#x60; describing the location where the operation happened, - &#x60;servicecontrol.googleapis.com/user_agent&#x60; describing the user agent of the API request, - &#x60;servicecontrol.googleapis.com/service_agent&#x60; describing the service used to handle the API request (e.g. ESP), - &#x60;servicecontrol.googleapis.com/platform&#x60; describing the platform where the API is served, such as App Engine, Compute Engine, or Kubernetes Engine. | [optional] 
**log_entries** | [**List[LogEntry]**](LogEntry.md) | Represents information to be logged. | [optional] 
**metric_value_sets** | [**List[MetricValueSet]**](MetricValueSet.md) | Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition. Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error. | [optional] 
**operation_id** | **str** | Identity of the operation. This must be unique within the scope of the service that generated the operation. If the service calls Check() and Report() on the same operation, the two calls should carry the same id. UUID version 4 is recommended, though not required. In scenarios where an operation is computed from existing information and an idempotent id is desirable for deduplication purpose, UUID version 5 is recommended. See RFC 4122 for details. | [optional] 
**operation_name** | **str** | Fully qualified name of the operation. Reserved for future use. | [optional] 
**quota_properties** | [**QuotaProperties**](QuotaProperties.md) |  | [optional] 
**resources** | [**List[ResourceInfo]**](ResourceInfo.md) | The resources that are involved in the operation. The maximum supported number of entries in this field is 100. | [optional] 
**start_time** | **str** | Required. Start time of the operation. | [optional] 
**trace_spans** | [**List[TraceSpan]**](TraceSpan.md) | Unimplemented. A list of Cloud Trace spans. The span names shall contain the id of the destination project which can be either the produce or the consumer project. | [optional] 
**user_labels** | **Dict[str, str]** | Private Preview. This feature is only available for approved services. User defined labels for the resource that this operation is associated with. | [optional] 

## Example

```python
from openapi_client.models.operation import Operation

# TODO update the JSON string below
json = "{}"
# create an instance of Operation from a JSON string
operation_instance = Operation.from_json(json)
# print the JSON string representation of the object
print(Operation.to_json())

# convert the object into a dict
operation_dict = operation_instance.to_dict()
# create an instance of Operation from a dict
operation_from_dict = Operation.from_dict(operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


