# Mds

Describes Market days supply results for year make model trim combination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**make** | **str** | Make of vin provided | [optional] 
**mds** | **int** | Provides Market days supply count | [optional] 
**model** | **str** | Model of vin provided | [optional] 
**sold_vins** | **List[str]** | Sold vins array | [optional] 
**total_active_cars_for_ymmt** | **int** | Active cars for ymmt combination | [optional] 
**total_cars_sold_in_last_45_days** | **int** | Cars sold in last 45 days | [optional] 
**trim** | **str** | Trim of vin provided | [optional] 
**year** | **int** | Year of vin provided | [optional] 

## Example

```python
from openapi_client.models.mds import Mds

# TODO update the JSON string below
json = "{}"
# create an instance of Mds from a JSON string
mds_instance = Mds.from_json(json)
# print the JSON string representation of the object
print(Mds.to_json())

# convert the object into a dict
mds_dict = mds_instance.to_dict()
# create an instance of Mds from a dict
mds_from_dict = Mds.from_dict(mds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


