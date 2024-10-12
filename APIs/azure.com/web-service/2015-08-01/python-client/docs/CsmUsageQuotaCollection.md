# CsmUsageQuotaCollection

Collection of csm usage quotas

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[CsmUsageQuota]**](CsmUsageQuota.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.csm_usage_quota_collection import CsmUsageQuotaCollection

# TODO update the JSON string below
json = "{}"
# create an instance of CsmUsageQuotaCollection from a JSON string
csm_usage_quota_collection_instance = CsmUsageQuotaCollection.from_json(json)
# print the JSON string representation of the object
print(CsmUsageQuotaCollection.to_json())

# convert the object into a dict
csm_usage_quota_collection_dict = csm_usage_quota_collection_instance.to_dict()
# create an instance of CsmUsageQuotaCollection from a dict
csm_usage_quota_collection_from_dict = CsmUsageQuotaCollection.from_dict(csm_usage_quota_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


