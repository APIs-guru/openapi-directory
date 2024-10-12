# FailoverGroup

A failover group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**FailoverGroupProperties**](FailoverGroupProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.failover_group import FailoverGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverGroup from a JSON string
failover_group_instance = FailoverGroup.from_json(json)
# print the JSON string representation of the object
print(FailoverGroup.to_json())

# convert the object into a dict
failover_group_dict = failover_group_instance.to_dict()
# create an instance of FailoverGroup from a dict
failover_group_from_dict = FailoverGroup.from_dict(failover_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


