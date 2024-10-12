# AzureInternalMonitoringPipelineSinkDescription

Diagnostics settings for Geneva.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Azure Internal monitoring pipeline account. | [optional] 
**auto_key_config_url** | **str** | Azure Internal monitoring pipeline autokey associated with the certificate. | [optional] 
**fluentd_config_url** | **object** | Azure Internal monitoring agent fluentd configuration. | [optional] 
**ma_config_url** | **str** | Azure Internal monitoring agent configuration. | [optional] 
**namespace** | **str** | Azure Internal monitoring pipeline account namespace. | [optional] 

## Example

```python
from openapi_client.models.azure_internal_monitoring_pipeline_sink_description import AzureInternalMonitoringPipelineSinkDescription

# TODO update the JSON string below
json = "{}"
# create an instance of AzureInternalMonitoringPipelineSinkDescription from a JSON string
azure_internal_monitoring_pipeline_sink_description_instance = AzureInternalMonitoringPipelineSinkDescription.from_json(json)
# print the JSON string representation of the object
print(AzureInternalMonitoringPipelineSinkDescription.to_json())

# convert the object into a dict
azure_internal_monitoring_pipeline_sink_description_dict = azure_internal_monitoring_pipeline_sink_description_instance.to_dict()
# create an instance of AzureInternalMonitoringPipelineSinkDescription from a dict
azure_internal_monitoring_pipeline_sink_description_from_dict = AzureInternalMonitoringPipelineSinkDescription.from_dict(azure_internal_monitoring_pipeline_sink_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


