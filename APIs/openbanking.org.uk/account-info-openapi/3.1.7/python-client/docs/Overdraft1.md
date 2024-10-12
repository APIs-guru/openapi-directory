# Overdraft1

Details about Overdraft rates, fees & charges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **List[str]** | Associated Notes about the overdraft rates | [optional] 
**overdraft_tier_band_set** | [**List[OverdraftTierBandSetInner1]**](OverdraftTierBandSetInner1.md) | Tier band set details | 

## Example

```python
from openapi_client.models.overdraft1 import Overdraft1

# TODO update the JSON string below
json = "{}"
# create an instance of Overdraft1 from a JSON string
overdraft1_instance = Overdraft1.from_json(json)
# print the JSON string representation of the object
print(Overdraft1.to_json())

# convert the object into a dict
overdraft1_dict = overdraft1_instance.to_dict()
# create an instance of Overdraft1 from a dict
overdraft1_from_dict = Overdraft1.from_dict(overdraft1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


