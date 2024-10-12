# QuotaBucket

A quota bucket is a quota provisioning unit for a specific set of dimensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_override** | [**QuotaOverride**](QuotaOverride.md) |  | [optional] 
**consumer_override** | [**QuotaOverride**](QuotaOverride.md) |  | [optional] 
**default_limit** | **str** | The default limit of this quota bucket, as specified by the service configuration. | [optional] 
**dimensions** | **Dict[str, str]** | The dimensions of this quota bucket. If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override. If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map. For example, if the map has key &#x60;region&#x60; and value &#x60;us-east-1&#x60;, then the specified effective limit is only effective in that region, and the specified overrides apply only in that region. | [optional] 
**effective_limit** | **str** | The effective limit of this quota bucket. Equal to default_limit if there are no overrides. | [optional] 
**producer_override** | [**QuotaOverride**](QuotaOverride.md) |  | [optional] 
**producer_quota_policy** | [**ProducerQuotaPolicy**](ProducerQuotaPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.quota_bucket import QuotaBucket

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaBucket from a JSON string
quota_bucket_instance = QuotaBucket.from_json(json)
# print the JSON string representation of the object
print(QuotaBucket.to_json())

# convert the object into a dict
quota_bucket_dict = quota_bucket_instance.to_dict()
# create an instance of QuotaBucket from a dict
quota_bucket_from_dict = QuotaBucket.from_dict(quota_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


