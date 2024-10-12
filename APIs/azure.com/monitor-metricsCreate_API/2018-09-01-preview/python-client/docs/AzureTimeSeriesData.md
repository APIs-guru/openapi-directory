# AzureTimeSeriesData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Gets or sets Count value | 
**dim_values** | **List[str]** | Gets or sets dimension values | [optional] 
**max** | **float** | Gets or sets Max value | 
**min** | **float** | Gets or sets Min value | 
**sum** | **float** | Gets or sets Sum value | 

## Example

```python
from openapi_client.models.azure_time_series_data import AzureTimeSeriesData

# TODO update the JSON string below
json = "{}"
# create an instance of AzureTimeSeriesData from a JSON string
azure_time_series_data_instance = AzureTimeSeriesData.from_json(json)
# print the JSON string representation of the object
print(AzureTimeSeriesData.to_json())

# convert the object into a dict
azure_time_series_data_dict = azure_time_series_data_instance.to_dict()
# create an instance of AzureTimeSeriesData from a dict
azure_time_series_data_from_dict = AzureTimeSeriesData.from_dict(azure_time_series_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


