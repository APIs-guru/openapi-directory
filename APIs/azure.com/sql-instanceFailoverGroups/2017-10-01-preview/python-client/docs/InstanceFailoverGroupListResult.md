# InstanceFailoverGroupListResult

A list of instance failover groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[InstanceFailoverGroup]**](InstanceFailoverGroup.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_failover_group_list_result import InstanceFailoverGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceFailoverGroupListResult from a JSON string
instance_failover_group_list_result_instance = InstanceFailoverGroupListResult.from_json(json)
# print the JSON string representation of the object
print(InstanceFailoverGroupListResult.to_json())

# convert the object into a dict
instance_failover_group_list_result_dict = instance_failover_group_list_result_instance.to_dict()
# create an instance of InstanceFailoverGroupListResult from a dict
instance_failover_group_list_result_from_dict = InstanceFailoverGroupListResult.from_dict(instance_failover_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


