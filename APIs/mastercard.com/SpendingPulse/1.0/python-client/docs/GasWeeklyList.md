# GasWeeklyList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Total number of records returned from the query. | [optional] 
**gas_weekly_array** | [**GasWeeklyArray**](GasWeeklyArray.md) |  | [optional] 
**message** | **str** | Success/Failure. | [optional] 

## Example

```python
from openapi_client.models.gas_weekly_list import GasWeeklyList

# TODO update the JSON string below
json = "{}"
# create an instance of GasWeeklyList from a JSON string
gas_weekly_list_instance = GasWeeklyList.from_json(json)
# print the JSON string representation of the object
print(GasWeeklyList.to_json())

# convert the object into a dict
gas_weekly_list_dict = gas_weekly_list_instance.to_dict()
# create an instance of GasWeeklyList from a dict
gas_weekly_list_from_dict = GasWeeklyList.from_dict(gas_weekly_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


