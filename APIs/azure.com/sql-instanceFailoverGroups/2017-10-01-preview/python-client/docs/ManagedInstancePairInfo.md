# ManagedInstancePairInfo

Pairs of Managed Instances in the failover group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_managed_instance_id** | **str** | Id of Partner Managed Instance in pair. | [optional] 
**primary_managed_instance_id** | **str** | Id of Primary Managed Instance in pair. | [optional] 

## Example

```python
from openapi_client.models.managed_instance_pair_info import ManagedInstancePairInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstancePairInfo from a JSON string
managed_instance_pair_info_instance = ManagedInstancePairInfo.from_json(json)
# print the JSON string representation of the object
print(ManagedInstancePairInfo.to_json())

# convert the object into a dict
managed_instance_pair_info_dict = managed_instance_pair_info_instance.to_dict()
# create an instance of ManagedInstancePairInfo from a dict
managed_instance_pair_info_from_dict = ManagedInstancePairInfo.from_dict(managed_instance_pair_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


