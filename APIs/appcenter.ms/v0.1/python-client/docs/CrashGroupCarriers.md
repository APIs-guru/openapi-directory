# CrashGroupCarriers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carriers** | [**List[CrashGroupCarriersCarriersInner]**](CrashGroupCarriersCarriersInner.md) |  | [optional] 
**crash_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.crash_group_carriers import CrashGroupCarriers

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupCarriers from a JSON string
crash_group_carriers_instance = CrashGroupCarriers.from_json(json)
# print the JSON string representation of the object
print(CrashGroupCarriers.to_json())

# convert the object into a dict
crash_group_carriers_dict = crash_group_carriers_instance.to_dict()
# create an instance of CrashGroupCarriers from a dict
crash_group_carriers_from_dict = CrashGroupCarriers.from_dict(crash_group_carriers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


