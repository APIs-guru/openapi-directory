# CapitalReserves


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capitalreserves** | **str** |  | [optional] 
**networth** | **str** |  | [optional] 
**paidupequity** | **str** |  | [optional] 
**profitlossreserve** | **str** |  | [optional] 
**reserves** | **str** |  | [optional] 
**revalutationreserve** | **str** |  | [optional] 
**shareholderfunds** | **str** |  | [optional] 
**sundryreserves** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.capital_reserves import CapitalReserves

# TODO update the JSON string below
json = "{}"
# create an instance of CapitalReserves from a JSON string
capital_reserves_instance = CapitalReserves.from_json(json)
# print the JSON string representation of the object
print(CapitalReserves.to_json())

# convert the object into a dict
capital_reserves_dict = capital_reserves_instance.to_dict()
# create an instance of CapitalReserves from a dict
capital_reserves_from_dict = CapitalReserves.from_dict(capital_reserves_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


