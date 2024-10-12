# ApplicationInsightsComponentProperties

Properties that define an Application Insights component resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Application Insights Unique ID for your Application. | [optional] [readonly] 
**application_id** | **str** | The unique ID of your application. This field mirrors the &#39;Name&#39; field and cannot be changed. | [optional] [readonly] 
**application_type** | **str** | Type of application being monitored. | [default to 'web']
**connection_string** | **str** | Application Insights component connection string. | [optional] [readonly] 
**creation_date** | **datetime** | Creation Date for the Application Insights component, in ISO 8601 format. | [optional] [readonly] 
**disable_ip_masking** | **bool** | Disable IP masking. | [optional] 
**flow_type** | **str** | Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to &#39;Bluefield&#39; when creating/updating a component via the REST API. | [optional] [default to 'Bluefield']
**hockey_app_id** | **str** | The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp. | [optional] 
**hockey_app_token** | **str** | Token used to authenticate communications with between Application Insights and HockeyApp. | [optional] [readonly] 
**immediate_purge_data_on30_days** | **bool** | Purge data immediately after 30 days. | [optional] 
**instrumentation_key** | **str** | Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component. | [optional] [readonly] 
**request_source** | **str** | Describes what tool created this Application Insights component. Customers using this API should set this to the default &#39;rest&#39;. | [optional] [default to 'rest']
**retention_in_days** | **int** | Retention period in days. | [optional] 
**sampling_percentage** | **float** | Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry. | [optional] 
**tenant_id** | **str** | Azure Tenant Id. | [optional] [readonly] 
**provisioning_state** | **str** | Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_properties import ApplicationInsightsComponentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentProperties from a JSON string
application_insights_component_properties_instance = ApplicationInsightsComponentProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentProperties.to_json())

# convert the object into a dict
application_insights_component_properties_dict = application_insights_component_properties_instance.to_dict()
# create an instance of ApplicationInsightsComponentProperties from a dict
application_insights_component_properties_from_dict = ApplicationInsightsComponentProperties.from_dict(application_insights_component_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


