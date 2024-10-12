# AzureMetricsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_data** | [**AzureMetricsBaseData**](AzureMetricsBaseData.md) |  | 

## Example

```python
from openapi_client.models.azure_metrics_data import AzureMetricsData

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMetricsData from a JSON string
azure_metrics_data_instance = AzureMetricsData.from_json(json)
# print the JSON string representation of the object
print(AzureMetricsData.to_json())

# convert the object into a dict
azure_metrics_data_dict = azure_metrics_data_instance.to_dict()
# create an instance of AzureMetricsData from a dict
azure_metrics_data_from_dict = AzureMetricsData.from_dict(azure_metrics_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


