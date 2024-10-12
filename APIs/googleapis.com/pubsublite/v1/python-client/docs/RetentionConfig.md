# RetentionConfig

The settings for a topic's message retention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**per_partition_bytes** | **str** | The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic&#39;s partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of &#x60;period&#x60;. | [optional] 
**period** | **str** | How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below &#x60;per_partition_bytes&#x60;. | [optional] 

## Example

```python
from openapi_client.models.retention_config import RetentionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionConfig from a JSON string
retention_config_instance = RetentionConfig.from_json(json)
# print the JSON string representation of the object
print(RetentionConfig.to_json())

# convert the object into a dict
retention_config_dict = retention_config_instance.to_dict()
# create an instance of RetentionConfig from a dict
retention_config_from_dict = RetentionConfig.from_dict(retention_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


