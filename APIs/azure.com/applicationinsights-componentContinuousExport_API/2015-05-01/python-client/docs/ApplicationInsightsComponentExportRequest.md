# ApplicationInsightsComponentExportRequest

An Application Insights component Continuous Export configuration request definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_account_id** | **str** | The name of destination storage account. | [optional] 
**destination_address** | **str** | The SAS URL for the destination storage container. It must grant write permission. | [optional] 
**destination_storage_location_id** | **str** | The location ID of the destination storage container. | [optional] 
**destination_storage_subscription_id** | **str** | The subscription ID of the destination storage container. | [optional] 
**destination_type** | **str** | The Continuous Export destination type. This has to be &#39;Blob&#39;. | [optional] 
**is_enabled** | **str** | Set to &#39;true&#39; to create a Continuous Export configuration as enabled, otherwise set it to &#39;false&#39;. | [optional] 
**notification_queue_enabled** | **str** | Deprecated | [optional] 
**notification_queue_uri** | **str** | Deprecated | [optional] 
**record_types** | **str** | The document types to be exported, as comma separated values. Allowed values include &#39;Requests&#39;, &#39;Event&#39;, &#39;Exceptions&#39;, &#39;Metrics&#39;, &#39;PageViews&#39;, &#39;PageViewPerformance&#39;, &#39;Rdd&#39;, &#39;PerformanceCounters&#39;, &#39;Availability&#39;, &#39;Messages&#39;. | [optional] 

## Example

```python
from openapi_client.models.application_insights_component_export_request import ApplicationInsightsComponentExportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentExportRequest from a JSON string
application_insights_component_export_request_instance = ApplicationInsightsComponentExportRequest.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentExportRequest.to_json())

# convert the object into a dict
application_insights_component_export_request_dict = application_insights_component_export_request_instance.to_dict()
# create an instance of ApplicationInsightsComponentExportRequest from a dict
application_insights_component_export_request_from_dict = ApplicationInsightsComponentExportRequest.from_dict(application_insights_component_export_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


