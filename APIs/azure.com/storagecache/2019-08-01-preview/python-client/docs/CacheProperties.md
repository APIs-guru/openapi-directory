# CacheProperties

Properties for the cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_size_gb** | **int** | The size of this cache&#39;s cache, in GB. | [optional] 
**health** | [**CacheHealth**](CacheHealth.md) |  | [optional] 
**mount_addresses** | **List[str]** | Array of IP addresses that can be used by clients mounting this Cache. | [optional] [readonly] 
**provisioning_state** | **str** | ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property | [optional] 
**subnet** | **str** | A fully qualified URL. | [optional] 
**upgrade_status** | [**CacheUpgradeStatus**](CacheUpgradeStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.cache_properties import CacheProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CacheProperties from a JSON string
cache_properties_instance = CacheProperties.from_json(json)
# print the JSON string representation of the object
print(CacheProperties.to_json())

# convert the object into a dict
cache_properties_dict = cache_properties_instance.to_dict()
# create an instance of CacheProperties from a dict
cache_properties_from_dict = CacheProperties.from_dict(cache_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


