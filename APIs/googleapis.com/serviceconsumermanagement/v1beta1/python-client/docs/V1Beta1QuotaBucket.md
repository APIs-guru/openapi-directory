# V1Beta1QuotaBucket

A quota bucket is a quota provisioning unit for a specific set of dimensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_override** | [**V1Beta1QuotaOverride**](V1Beta1QuotaOverride.md) |  | [optional] 
**consumer_override** | [**V1Beta1QuotaOverride**](V1Beta1QuotaOverride.md) |  | [optional] 
**default_limit** | **str** | The default limit of this quota bucket, as specified by the service configuration. | [optional] 
**dimensions** | **Dict[str, str]** | The dimensions of this quota bucket. If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override. If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map. For example, if the map has key \&quot;region\&quot; and value \&quot;us-east-1\&quot;, then the specified effective limit is only effective in that region, and the specified overrides apply only in that region. | [optional] 
**effective_limit** | **str** | The effective limit of this quota bucket. Equal to default_limit if there are no overrides. | [optional] 
**producer_override** | [**V1Beta1QuotaOverride**](V1Beta1QuotaOverride.md) |  | [optional] 
**producer_quota_policy** | [**V1Beta1ProducerQuotaPolicy**](V1Beta1ProducerQuotaPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_quota_bucket import V1Beta1QuotaBucket

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1QuotaBucket from a JSON string
v1_beta1_quota_bucket_instance = V1Beta1QuotaBucket.from_json(json)
# print the JSON string representation of the object
print(V1Beta1QuotaBucket.to_json())

# convert the object into a dict
v1_beta1_quota_bucket_dict = v1_beta1_quota_bucket_instance.to_dict()
# create an instance of V1Beta1QuotaBucket from a dict
v1_beta1_quota_bucket_from_dict = V1Beta1QuotaBucket.from_dict(v1_beta1_quota_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


