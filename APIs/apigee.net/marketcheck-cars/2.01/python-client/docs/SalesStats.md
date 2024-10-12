# SalesStats

Sales stats response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute_mean_deviation** | **float** | absolute_mean_deviation | [optional] 
**iqr** | **float** | iqr | [optional] 
**mean** | **float** | mean | [optional] 
**median** | **float** | median | [optional] 
**population_standard_deviation** | **float** | population_standard_deviation | [optional] 
**standard_deviation** | **float** | standard_deviation | [optional] 
**trimmed_mean** | **float** | trimmed_mean | [optional] 
**variance** | **float** | variance | [optional] 
**weighted_mean** | **float** | weighted_mean | [optional] 

## Example

```python
from openapi_client.models.sales_stats import SalesStats

# TODO update the JSON string below
json = "{}"
# create an instance of SalesStats from a JSON string
sales_stats_instance = SalesStats.from_json(json)
# print the JSON string representation of the object
print(SalesStats.to_json())

# convert the object into a dict
sales_stats_dict = sales_stats_instance.to_dict()
# create an instance of SalesStats from a dict
sales_stats_from_dict = SalesStats.from_dict(sales_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


