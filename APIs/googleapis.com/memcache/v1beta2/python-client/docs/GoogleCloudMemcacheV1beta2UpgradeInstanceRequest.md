# GoogleCloudMemcacheV1beta2UpgradeInstanceRequest

Request for UpgradeInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memcache_version** | **str** | Required. Specifies the target version of memcached engine to upgrade to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_memcache_v1beta2_upgrade_instance_request import GoogleCloudMemcacheV1beta2UpgradeInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMemcacheV1beta2UpgradeInstanceRequest from a JSON string
google_cloud_memcache_v1beta2_upgrade_instance_request_instance = GoogleCloudMemcacheV1beta2UpgradeInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMemcacheV1beta2UpgradeInstanceRequest.to_json())

# convert the object into a dict
google_cloud_memcache_v1beta2_upgrade_instance_request_dict = google_cloud_memcache_v1beta2_upgrade_instance_request_instance.to_dict()
# create an instance of GoogleCloudMemcacheV1beta2UpgradeInstanceRequest from a dict
google_cloud_memcache_v1beta2_upgrade_instance_request_from_dict = GoogleCloudMemcacheV1beta2UpgradeInstanceRequest.from_dict(google_cloud_memcache_v1beta2_upgrade_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


