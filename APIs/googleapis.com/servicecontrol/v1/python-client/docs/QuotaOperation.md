# QuotaOperation

Represents information regarding a quota operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_id** | **str** | Identity of the consumer for whom this quota operation is being performed. This can be in one of the following formats: project:, project_number:, api_key:. | [optional] 
**labels** | **Dict[str, str]** | Labels describing the operation. | [optional] 
**method_name** | **str** | Fully qualified name of the API method for which this quota operation is requested. This name is used for matching quota rules or metric rules and billing status rules defined in service configuration. This field should not be set if any of the following is true: (1) the quota operation is performed on non-API resources. (2) quota_metrics is set because the caller is doing quota override. Example of an RPC method name: google.example.library.v1.LibraryService.CreateShelf | [optional] 
**operation_id** | **str** | Identity of the operation. For Allocation Quota, this is expected to be unique within the scope of the service that generated the operation, and guarantees idempotency in case of retries. In order to ensure best performance and latency in the Quota backends, operation_ids are optimally associated with time, so that related operations can be accessed fast in storage. For this reason, the recommended token for services that intend to operate at a high QPS is Unix time in nanos + UUID | [optional] 
**quota_metrics** | [**List[MetricValueSet]**](MetricValueSet.md) | Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition. Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error. This field is mutually exclusive with method_name. | [optional] 
**quota_mode** | **str** | Quota mode for this operation. | [optional] 

## Example

```python
from openapi_client.models.quota_operation import QuotaOperation

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaOperation from a JSON string
quota_operation_instance = QuotaOperation.from_json(json)
# print the JSON string representation of the object
print(QuotaOperation.to_json())

# convert the object into a dict
quota_operation_dict = quota_operation_instance.to_dict()
# create an instance of QuotaOperation from a dict
quota_operation_from_dict = QuotaOperation.from_dict(quota_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


