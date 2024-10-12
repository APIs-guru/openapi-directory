# GoogleCloudConnectorsV1LockConfig

Determines whether or no a connection is locked. If locked, a reason must be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **bool** | Indicates whether or not the connection is locked. | [optional] 
**reason** | **str** | Describes why a connection is locked. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_lock_config import GoogleCloudConnectorsV1LockConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1LockConfig from a JSON string
google_cloud_connectors_v1_lock_config_instance = GoogleCloudConnectorsV1LockConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1LockConfig.to_json())

# convert the object into a dict
google_cloud_connectors_v1_lock_config_dict = google_cloud_connectors_v1_lock_config_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1LockConfig from a dict
google_cloud_connectors_v1_lock_config_from_dict = GoogleCloudConnectorsV1LockConfig.from_dict(google_cloud_connectors_v1_lock_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


