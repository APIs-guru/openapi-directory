# AzureMetricsDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AzureMetricsData**](AzureMetricsData.md) |  | 
**time** | **str** | Gets or sets Time property (in ISO 8601 format) | 

## Example

```python
from openapi_client.models.azure_metrics_document import AzureMetricsDocument

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMetricsDocument from a JSON string
azure_metrics_document_instance = AzureMetricsDocument.from_json(json)
# print the JSON string representation of the object
print(AzureMetricsDocument.to_json())

# convert the object into a dict
azure_metrics_document_dict = azure_metrics_document_instance.to_dict()
# create an instance of AzureMetricsDocument from a dict
azure_metrics_document_from_dict = AzureMetricsDocument.from_dict(azure_metrics_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


