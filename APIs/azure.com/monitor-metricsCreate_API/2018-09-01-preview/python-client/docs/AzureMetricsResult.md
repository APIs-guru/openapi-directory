# AzureMetricsResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_failure_response** | [**ApiFailureResponse**](ApiFailureResponse.md) |  | [optional] 
**status_code** | **int** | Http status code response  | [optional] 

## Example

```python
from openapi_client.models.azure_metrics_result import AzureMetricsResult

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMetricsResult from a JSON string
azure_metrics_result_instance = AzureMetricsResult.from_json(json)
# print the JSON string representation of the object
print(AzureMetricsResult.to_json())

# convert the object into a dict
azure_metrics_result_dict = azure_metrics_result_instance.to_dict()
# create an instance of AzureMetricsResult from a dict
azure_metrics_result_from_dict = AzureMetricsResult.from_dict(azure_metrics_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


