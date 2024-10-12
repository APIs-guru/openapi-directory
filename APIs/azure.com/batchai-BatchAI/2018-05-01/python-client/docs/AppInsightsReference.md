# AppInsightsReference

Azure Application Insights information for performance counters reporting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component** | [**ResourceId**](ResourceId.md) |  | 
**instrumentation_key** | **str** | Value of the Azure Application Insights instrumentation key. | [optional] 
**instrumentation_key_secret_reference** | [**KeyVaultSecretReference**](KeyVaultSecretReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_insights_reference import AppInsightsReference

# TODO update the JSON string below
json = "{}"
# create an instance of AppInsightsReference from a JSON string
app_insights_reference_instance = AppInsightsReference.from_json(json)
# print the JSON string representation of the object
print(AppInsightsReference.to_json())

# convert the object into a dict
app_insights_reference_dict = app_insights_reference_instance.to_dict()
# create an instance of AppInsightsReference from a dict
app_insights_reference_from_dict = AppInsightsReference.from_dict(app_insights_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


