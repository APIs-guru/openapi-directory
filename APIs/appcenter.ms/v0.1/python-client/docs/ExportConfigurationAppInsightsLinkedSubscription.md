# ExportConfigurationAppInsightsLinkedSubscription

Configuration for export to Application Insights resource with customer linked subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **str** | Id of customer subscription linked in App Center | 
**backfill** | **bool** | Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation. | [optional] 
**export_entities** | **List[str]** |  | [optional] 
**resource_group** | **str** | The resource group name on azure | [optional] 
**resource_name** | **str** | The resource name on azure | [optional] 
**type** | **str** | Type of export configuration | 

## Example

```python
from openapi_client.models.export_configuration_app_insights_linked_subscription import ExportConfigurationAppInsightsLinkedSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of ExportConfigurationAppInsightsLinkedSubscription from a JSON string
export_configuration_app_insights_linked_subscription_instance = ExportConfigurationAppInsightsLinkedSubscription.from_json(json)
# print the JSON string representation of the object
print(ExportConfigurationAppInsightsLinkedSubscription.to_json())

# convert the object into a dict
export_configuration_app_insights_linked_subscription_dict = export_configuration_app_insights_linked_subscription_instance.to_dict()
# create an instance of ExportConfigurationAppInsightsLinkedSubscription from a dict
export_configuration_app_insights_linked_subscription_from_dict = ExportConfigurationAppInsightsLinkedSubscription.from_dict(export_configuration_app_insights_linked_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


