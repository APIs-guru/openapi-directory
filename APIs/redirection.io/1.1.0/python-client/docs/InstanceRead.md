# InstanceRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_duration** | **int** |  | [optional] 
**agent_version** | **str** |  | [optional] 
**agent_version_status** | **str** |  | [optional] [readonly] 
**config** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**gone** | **bool** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**last_completed_at** | **datetime** |  | [optional] 
**last_started_at** | **datetime** |  | [optional] 
**live** | **bool** |  | [optional] 
**logging** | **bool** |  | [optional] 
**logs_last_flushed_at** | **datetime** |  | [optional] 
**message** | **str** |  | [optional] 
**misconfigured** | **bool** |  | [optional] 
**name** | **str** |  | 
**rules_count** | **int** |  | [optional] 
**rules_hash** | **str** |  | [optional] 
**stale** | **bool** |  | [optional] [readonly] 
**status** | **int** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.instance_read import InstanceRead

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceRead from a JSON string
instance_read_instance = InstanceRead.from_json(json)
# print the JSON string representation of the object
print(InstanceRead.to_json())

# convert the object into a dict
instance_read_dict = instance_read_instance.to_dict()
# create an instance of InstanceRead from a dict
instance_read_from_dict = InstanceRead.from_dict(instance_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


