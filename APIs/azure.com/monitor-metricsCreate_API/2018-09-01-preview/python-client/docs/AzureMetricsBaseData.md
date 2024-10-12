# AzureMetricsBaseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dim_names** | **List[str]** | Gets or sets the list of dimension names (optional) | [optional] 
**metric** | **str** | Gets or sets the Metric name | 
**namespace** | **str** | Gets or sets the Metric namespace | 
**series** | [**List[AzureTimeSeriesData]**](AzureTimeSeriesData.md) | Gets or sets the list of time series data for the metric (one per unique dimension combination) | 

## Example

```python
from openapi_client.models.azure_metrics_base_data import AzureMetricsBaseData

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMetricsBaseData from a JSON string
azure_metrics_base_data_instance = AzureMetricsBaseData.from_json(json)
# print the JSON string representation of the object
print(AzureMetricsBaseData.to_json())

# convert the object into a dict
azure_metrics_base_data_dict = azure_metrics_base_data_instance.to_dict()
# create an instance of AzureMetricsBaseData from a dict
azure_metrics_base_data_from_dict = AzureMetricsBaseData.from_dict(azure_metrics_base_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


