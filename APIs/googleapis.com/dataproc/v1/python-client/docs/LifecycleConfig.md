# LifecycleConfig

Specifies the cluster auto-delete schedule configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_delete_time** | **str** | Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). | [optional] 
**auto_delete_ttl** | **str** | Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). | [optional] 
**idle_delete_ttl** | **str** | Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). | [optional] 
**idle_start_time** | **str** | Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). | [optional] [readonly] 

## Example

```python
from openapi_client.models.lifecycle_config import LifecycleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LifecycleConfig from a JSON string
lifecycle_config_instance = LifecycleConfig.from_json(json)
# print the JSON string representation of the object
print(LifecycleConfig.to_json())

# convert the object into a dict
lifecycle_config_dict = lifecycle_config_instance.to_dict()
# create an instance of LifecycleConfig from a dict
lifecycle_config_from_dict = LifecycleConfig.from_dict(lifecycle_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


