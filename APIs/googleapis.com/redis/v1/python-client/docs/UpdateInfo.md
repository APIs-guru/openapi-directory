# UpdateInfo

Represents information about an updating cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_replica_count** | **int** | Target number of replica nodes per shard. | [optional] 
**target_shard_count** | **int** | Target number of shards for redis cluster | [optional] 

## Example

```python
from openapi_client.models.update_info import UpdateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInfo from a JSON string
update_info_instance = UpdateInfo.from_json(json)
# print the JSON string representation of the object
print(UpdateInfo.to_json())

# convert the object into a dict
update_info_dict = update_info_instance.to_dict()
# create an instance of UpdateInfo from a dict
update_info_from_dict = UpdateInfo.from_dict(update_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


