# Summary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ask** | **float** |  | [optional] 
**base_currency** | **str** |  | [optional] 
**bid** | **float** |  | [optional] 
**fifty_two_week_high** | **float** |  | [optional] 
**fifty_two_week_low** | **float** |  | [optional] 
**fifty_two_week_percent_change** | **float** |  | [optional] 
**four_week_percent_change** | **float** |  | [optional] 
**high** | **float** |  | [optional] 
**last** | **float** |  | [optional] 
**low** | **float** |  | [optional] 
**one_day_change** | **float** |  | [optional] 
**one_day_percent_change** | **float** |  | [optional] 
**one_day_value** | **float** |  | [optional] 
**open** | **float** |  | [optional] 
**symbol** | **str** |  | [optional] 
**time_stamp** | **datetime** |  | [optional] 
**twelve_week_percent_change** | **float** |  | [optional] 
**year_to_date_percent_change** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.summary import Summary

# TODO update the JSON string below
json = "{}"
# create an instance of Summary from a JSON string
summary_instance = Summary.from_json(json)
# print the JSON string representation of the object
print(Summary.to_json())

# convert the object into a dict
summary_dict = summary_instance.to_dict()
# create an instance of Summary from a dict
summary_from_dict = Summary.from_dict(summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


