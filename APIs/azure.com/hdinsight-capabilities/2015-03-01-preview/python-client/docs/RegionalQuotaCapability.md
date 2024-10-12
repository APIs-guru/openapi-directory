# RegionalQuotaCapability

The regional quota capacity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cores_available** | **int** | The number of courses available in the region. | [optional] 
**cores_used** | **int** | The number of cores used in the region. | [optional] 
**region_name** | **str** | The region name. | [optional] 

## Example

```python
from openapi_client.models.regional_quota_capability import RegionalQuotaCapability

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalQuotaCapability from a JSON string
regional_quota_capability_instance = RegionalQuotaCapability.from_json(json)
# print the JSON string representation of the object
print(RegionalQuotaCapability.to_json())

# convert the object into a dict
regional_quota_capability_dict = regional_quota_capability_instance.to_dict()
# create an instance of RegionalQuotaCapability from a dict
regional_quota_capability_from_dict = RegionalQuotaCapability.from_dict(regional_quota_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


