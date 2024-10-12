# FailoverTargetsList

The list of all devices in a resource and their eligibility status as a failover target device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[FailoverTarget]**](FailoverTarget.md) | The list of all the failover targets. | [optional] 

## Example

```python
from openapi_client.models.failover_targets_list import FailoverTargetsList

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverTargetsList from a JSON string
failover_targets_list_instance = FailoverTargetsList.from_json(json)
# print the JSON string representation of the object
print(FailoverTargetsList.to_json())

# convert the object into a dict
failover_targets_list_dict = failover_targets_list_instance.to_dict()
# create an instance of FailoverTargetsList from a dict
failover_targets_list_from_dict = FailoverTargetsList.from_dict(failover_targets_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


