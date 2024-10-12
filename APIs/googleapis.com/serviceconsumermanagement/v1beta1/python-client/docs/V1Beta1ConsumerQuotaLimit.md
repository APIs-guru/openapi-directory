# V1Beta1ConsumerQuotaLimit

Consumer quota settings for a quota limit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_precise** | **bool** | Whether this limit is precise or imprecise. | [optional] 
**metric** | **str** | The name of the parent metric of this limit. An example name would be: &#x60;compute.googleapis.com/cpus&#x60; | [optional] 
**name** | **str** | The resource name of the quota limit. An example name would be: &#x60;services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion&#x60; The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future. | [optional] 
**quota_buckets** | [**List[V1Beta1QuotaBucket]**](V1Beta1QuotaBucket.md) | Summary of the enforced quota buckets, organized by quota dimension, ordered from least specific to most specific (for example, the global default bucket, with no quota dimensions, will always appear first). | [optional] 
**supported_locations** | **List[str]** | List of all supported locations. This field is present only if the limit has a {region} or {zone} dimension. | [optional] 
**unit** | **str** | The limit unit. An example unit would be: &#x60;1/{project}/{region}&#x60; Note that &#x60;{project}&#x60; and &#x60;{region}&#x60; are not placeholders in this example; the literal characters &#x60;{&#x60; and &#x60;}&#x60; occur in the string. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_consumer_quota_limit import V1Beta1ConsumerQuotaLimit

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1ConsumerQuotaLimit from a JSON string
v1_beta1_consumer_quota_limit_instance = V1Beta1ConsumerQuotaLimit.from_json(json)
# print the JSON string representation of the object
print(V1Beta1ConsumerQuotaLimit.to_json())

# convert the object into a dict
v1_beta1_consumer_quota_limit_dict = v1_beta1_consumer_quota_limit_instance.to_dict()
# create an instance of V1Beta1ConsumerQuotaLimit from a dict
v1_beta1_consumer_quota_limit_from_dict = V1Beta1ConsumerQuotaLimit.from_dict(v1_beta1_consumer_quota_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


