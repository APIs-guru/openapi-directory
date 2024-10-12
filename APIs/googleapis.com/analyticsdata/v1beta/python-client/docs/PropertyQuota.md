# PropertyQuota

Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_requests** | [**QuotaStatus**](QuotaStatus.md) |  | [optional] 
**potentially_thresholded_requests_per_hour** | [**QuotaStatus**](QuotaStatus.md) |  | [optional] 
**server_errors_per_project_per_hour** | [**QuotaStatus**](QuotaStatus.md) |  | [optional] 
**tokens_per_day** | [**QuotaStatus**](QuotaStatus.md) |  | [optional] 
**tokens_per_hour** | [**QuotaStatus**](QuotaStatus.md) |  | [optional] 
**tokens_per_project_per_hour** | [**QuotaStatus**](QuotaStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_quota import PropertyQuota

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyQuota from a JSON string
property_quota_instance = PropertyQuota.from_json(json)
# print the JSON string representation of the object
print(PropertyQuota.to_json())

# convert the object into a dict
property_quota_dict = property_quota_instance.to_dict()
# create an instance of PropertyQuota from a dict
property_quota_from_dict = PropertyQuota.from_dict(property_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


