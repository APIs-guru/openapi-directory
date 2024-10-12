# FailoverGroupListResult

A list of failover groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[FailoverGroup]**](FailoverGroup.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.failover_group_list_result import FailoverGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverGroupListResult from a JSON string
failover_group_list_result_instance = FailoverGroupListResult.from_json(json)
# print the JSON string representation of the object
print(FailoverGroupListResult.to_json())

# convert the object into a dict
failover_group_list_result_dict = failover_group_list_result_instance.to_dict()
# create an instance of FailoverGroupListResult from a dict
failover_group_list_result_from_dict = FailoverGroupListResult.from_dict(failover_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


