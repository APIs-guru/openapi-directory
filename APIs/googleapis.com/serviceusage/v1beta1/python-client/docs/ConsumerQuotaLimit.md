# ConsumerQuotaLimit

Consumer quota settings for a quota limit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allows_admin_overrides** | **bool** | Whether admin overrides are allowed on this limit | [optional] 
**is_precise** | **bool** | Whether this limit is precise or imprecise. | [optional] 
**metric** | **str** | The name of the parent metric of this limit. An example name would be: &#x60;compute.googleapis.com/cpus&#x60; | [optional] 
**name** | **str** | The resource name of the quota limit. An example name would be: &#x60;projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion&#x60; The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future. | [optional] 
**quota_buckets** | [**List[QuotaBucket]**](QuotaBucket.md) | Summary of the enforced quota buckets, organized by quota dimension, ordered from least specific to most specific (for example, the global default bucket, with no quota dimensions, will always appear first). | [optional] 
**supported_locations** | **List[str]** | List of all supported locations. This field is present only if the limit has a {region} or {zone} dimension. | [optional] 
**unit** | **str** | The limit unit. An example unit would be &#x60;1/{project}/{region}&#x60; Note that &#x60;{project}&#x60; and &#x60;{region}&#x60; are not placeholders in this example; the literal characters &#x60;{&#x60; and &#x60;}&#x60; occur in the string. | [optional] 

## Example

```python
from openapi_client.models.consumer_quota_limit import ConsumerQuotaLimit

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerQuotaLimit from a JSON string
consumer_quota_limit_instance = ConsumerQuotaLimit.from_json(json)
# print the JSON string representation of the object
print(ConsumerQuotaLimit.to_json())

# convert the object into a dict
consumer_quota_limit_dict = consumer_quota_limit_instance.to_dict()
# create an instance of ConsumerQuotaLimit from a dict
consumer_quota_limit_from_dict = ConsumerQuotaLimit.from_dict(consumer_quota_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


