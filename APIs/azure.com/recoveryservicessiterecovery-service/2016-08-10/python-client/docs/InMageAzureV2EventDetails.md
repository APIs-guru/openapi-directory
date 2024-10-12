# InMageAzureV2EventDetails

Model class for event details of a VMwareAzureV2 event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | InMage Event Category. | [optional] 
**component** | **str** | InMage Event Component. | [optional] 
**corrective_action** | **str** | Corrective Action string for the event. | [optional] 
**details** | **str** | InMage Event Details. | [optional] 
**event_type** | **str** | InMage Event type. Takes one of the values of {InMageDataContract.InMageMonitoringEventType}. | [optional] 
**site_name** | **str** | VMware Site name. | [optional] 
**summary** | **str** | InMage Event Summary. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_event_details import InMageAzureV2EventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2EventDetails from a JSON string
in_mage_azure_v2_event_details_instance = InMageAzureV2EventDetails.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2EventDetails.to_json())

# convert the object into a dict
in_mage_azure_v2_event_details_dict = in_mage_azure_v2_event_details_instance.to_dict()
# create an instance of InMageAzureV2EventDetails from a dict
in_mage_azure_v2_event_details_from_dict = InMageAzureV2EventDetails.from_dict(in_mage_azure_v2_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


