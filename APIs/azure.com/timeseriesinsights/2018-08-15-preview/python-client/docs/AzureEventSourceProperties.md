# AzureEventSourceProperties

Properties of an event source that reads events from an event broker in Azure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_source_resource_id** | **str** | The resource id of the event source in Azure Resource Manager. | 
**timestamp_property_name** | **str** | The event property that will be used as the event source&#39;s timestamp. If a value isn&#39;t specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | [optional] 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_event_source_properties import AzureEventSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureEventSourceProperties from a JSON string
azure_event_source_properties_instance = AzureEventSourceProperties.from_json(json)
# print the JSON string representation of the object
print(AzureEventSourceProperties.to_json())

# convert the object into a dict
azure_event_source_properties_dict = azure_event_source_properties_instance.to_dict()
# create an instance of AzureEventSourceProperties from a dict
azure_event_source_properties_from_dict = AzureEventSourceProperties.from_dict(azure_event_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


