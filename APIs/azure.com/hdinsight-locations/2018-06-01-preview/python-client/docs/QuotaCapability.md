# QuotaCapability

The regional quota capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cores_used** | **int** | The number of cores used in the subscription. | [optional] 
**max_cores_allowed** | **int** | The number of cores that the subscription allowed. | [optional] 
**regional_quotas** | [**List[RegionalQuotaCapability]**](RegionalQuotaCapability.md) | The list of region quota capabilities. | [optional] 

## Example

```python
from openapi_client.models.quota_capability import QuotaCapability

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaCapability from a JSON string
quota_capability_instance = QuotaCapability.from_json(json)
# print the JSON string representation of the object
print(QuotaCapability.to_json())

# convert the object into a dict
quota_capability_dict = quota_capability_instance.to_dict()
# create an instance of QuotaCapability from a dict
quota_capability_from_dict = QuotaCapability.from_dict(quota_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


