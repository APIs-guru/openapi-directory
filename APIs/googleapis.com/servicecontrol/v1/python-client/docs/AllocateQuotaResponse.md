# AllocateQuotaResponse

Response message for the AllocateQuota method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocate_errors** | [**List[QuotaError]**](QuotaError.md) | Indicates the decision of the allocate. | [optional] 
**allocate_info** | [**AllocateInfo**](AllocateInfo.md) |  | [optional] 
**operation_id** | **str** | The same operation_id value used in the AllocateQuotaRequest. Used for logging and diagnostics purposes. | [optional] 
**quota_metrics** | [**List[MetricValueSet]**](MetricValueSet.md) | Quota metrics to indicate the result of allocation. Depending on the request, one or more of the following metrics will be included: 1. Per quota group or per quota metric incremental usage will be specified using the following delta metric : \&quot;serviceruntime.googleapis.com/api/consumer/quota_used_count\&quot; 2. The quota limit reached condition will be specified using the following boolean metric : \&quot;serviceruntime.googleapis.com/quota/exceeded\&quot; | [optional] 
**service_config_id** | **str** | ID of the actual config used to process the request. | [optional] 

## Example

```python
from openapi_client.models.allocate_quota_response import AllocateQuotaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AllocateQuotaResponse from a JSON string
allocate_quota_response_instance = AllocateQuotaResponse.from_json(json)
# print the JSON string representation of the object
print(AllocateQuotaResponse.to_json())

# convert the object into a dict
allocate_quota_response_dict = allocate_quota_response_instance.to_dict()
# create an instance of AllocateQuotaResponse from a dict
allocate_quota_response_from_dict = AllocateQuotaResponse.from_dict(allocate_quota_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


