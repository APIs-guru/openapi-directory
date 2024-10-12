# QuotaInfo

Contains the quota information for a quota check response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_exceeded** | **List[str]** | Quota Metrics that have exceeded quota limits. For QuotaGroup-based quota, this is QuotaGroup.name For QuotaLimit-based quota, this is QuotaLimit.name See: google.api.Quota Deprecated: Use quota_metrics to get per quota group limit exceeded status. | [optional] 
**quota_consumed** | **Dict[str, int]** | Map of quota group name to the actual number of tokens consumed. If the quota check was not successful, then this will not be populated due to no quota consumption. We are not merging this field with &#39;quota_metrics&#39; field because of the complexity of scaling in Chemist client code base. For simplicity, we will keep this field for Castor (that scales quota usage) and &#39;quota_metrics&#39; for SuperQuota (that doesn&#39;t scale quota usage).  | [optional] 
**quota_metrics** | [**List[MetricValueSet]**](MetricValueSet.md) | Quota metrics to indicate the usage. Depending on the check request, one or more of the following metrics will be included: 1. For rate quota, per quota group or per quota metric incremental usage will be specified using the following delta metric: \&quot;serviceruntime.googleapis.com/api/consumer/quota_used_count\&quot; 2. For allocation quota, per quota metric total usage will be specified using the following gauge metric: \&quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count\&quot; 3. For both rate quota and allocation quota, the quota limit reached condition will be specified using the following boolean metric: \&quot;serviceruntime.googleapis.com/quota/exceeded\&quot; | [optional] 

## Example

```python
from openapi_client.models.quota_info import QuotaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaInfo from a JSON string
quota_info_instance = QuotaInfo.from_json(json)
# print the JSON string representation of the object
print(QuotaInfo.to_json())

# convert the object into a dict
quota_info_dict = quota_info_instance.to_dict()
# create an instance of QuotaInfo from a dict
quota_info_from_dict = QuotaInfo.from_dict(quota_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


