# FailoverGroupUpdate

A failover group update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FailoverGroupUpdateProperties**](FailoverGroupUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.failover_group_update import FailoverGroupUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverGroupUpdate from a JSON string
failover_group_update_instance = FailoverGroupUpdate.from_json(json)
# print the JSON string representation of the object
print(FailoverGroupUpdate.to_json())

# convert the object into a dict
failover_group_update_dict = failover_group_update_instance.to_dict()
# create an instance of FailoverGroupUpdate from a dict
failover_group_update_from_dict = FailoverGroupUpdate.from_dict(failover_group_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


