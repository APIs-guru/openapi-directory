# ApplicationInsightsComponentExportConfiguration

Properties that define a Continuous Export configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the Application Insights component. | [optional] [readonly] 
**container_name** | **str** | The name of the destination storage container. | [optional] [readonly] 
**destination_account_id** | **str** | The name of destination account. | [optional] [readonly] 
**destination_storage_location_id** | **str** | The destination account location ID. | [optional] [readonly] 
**destination_storage_subscription_id** | **str** | The destination storage account subscription ID. | [optional] [readonly] 
**destination_type** | **str** | The destination type. | [optional] [readonly] 
**export_id** | **str** | The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created. | [optional] [readonly] 
**export_status** | **str** | This indicates current Continuous Export configuration status. The possible values are &#39;Preparing&#39;, &#39;Success&#39;, &#39;Failure&#39;. | [optional] [readonly] 
**instrumentation_key** | **str** | The instrumentation key of the Application Insights component. | [optional] [readonly] 
**is_user_enabled** | **str** | This will be &#39;true&#39; if the Continuous Export configuration is enabled, otherwise it will be &#39;false&#39;. | [optional] [readonly] 
**last_gap_time** | **str** | The last time the Continuous Export configuration started failing. | [optional] [readonly] 
**last_success_time** | **str** | The last time data was successfully delivered to the destination storage container for this Continuous Export configuration. | [optional] [readonly] 
**last_user_update** | **str** | Last time the Continuous Export configuration was updated. | [optional] [readonly] 
**notification_queue_enabled** | **str** | Deprecated | [optional] 
**permanent_error_reason** | **str** | This is the reason the Continuous Export configuration started failing. It can be &#39;AzureStorageNotFound&#39; or &#39;AzureStorageAccessDenied&#39;. | [optional] [readonly] 
**record_types** | **str** | This comma separated list of document types that will be exported. The possible values include &#39;Requests&#39;, &#39;Event&#39;, &#39;Exceptions&#39;, &#39;Metrics&#39;, &#39;PageViews&#39;, &#39;PageViewPerformance&#39;, &#39;Rdd&#39;, &#39;PerformanceCounters&#39;, &#39;Availability&#39;, &#39;Messages&#39;. | [optional] 
**resource_group** | **str** | The resource group of the Application Insights component. | [optional] [readonly] 
**storage_name** | **str** | The name of the destination storage account. | [optional] [readonly] 
**subscription_id** | **str** | The subscription of the Application Insights component. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_export_configuration import ApplicationInsightsComponentExportConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentExportConfiguration from a JSON string
application_insights_component_export_configuration_instance = ApplicationInsightsComponentExportConfiguration.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentExportConfiguration.to_json())

# convert the object into a dict
application_insights_component_export_configuration_dict = application_insights_component_export_configuration_instance.to_dict()
# create an instance of ApplicationInsightsComponentExportConfiguration from a dict
application_insights_component_export_configuration_from_dict = ApplicationInsightsComponentExportConfiguration.from_dict(application_insights_component_export_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


