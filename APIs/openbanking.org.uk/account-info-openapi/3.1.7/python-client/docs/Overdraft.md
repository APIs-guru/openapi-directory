# Overdraft

Borrowing details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **List[str]** | Associated Notes about the overdraft rates | [optional] 
**overdraft_tier_band_set** | [**List[OverdraftTierBandSetInner]**](OverdraftTierBandSetInner.md) | Tier band set details | 

## Example

```python
from openapi_client.models.overdraft import Overdraft

# TODO update the JSON string below
json = "{}"
# create an instance of Overdraft from a JSON string
overdraft_instance = Overdraft.from_json(json)
# print the JSON string representation of the object
print(Overdraft.to_json())

# convert the object into a dict
overdraft_dict = overdraft_instance.to_dict()
# create an instance of Overdraft from a dict
overdraft_from_dict = Overdraft.from_dict(overdraft_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


