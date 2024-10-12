# QueuedResourceState

QueuedResourceState defines the details of the QueuedResource request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_data** | **object** | Further data for the accepted state. | [optional] 
**active_data** | **object** | Further data for the active state. | [optional] 
**creating_data** | **object** | Further data for the creating state. | [optional] 
**deleting_data** | **object** | Further data for the deleting state. | [optional] 
**failed_data** | [**FailedData**](FailedData.md) |  | [optional] 
**provisioning_data** | **object** | Further data for the provisioning state. | [optional] 
**state** | **str** | State of the QueuedResource request. | [optional] 
**state_initiator** | **str** | Output only. The initiator of the QueuedResources&#39;s current state. Used to indicate whether the SUSPENDING/SUSPENDED state was initiated by the user or the service. | [optional] [readonly] 
**suspended_data** | **object** | Further data for the suspended state. | [optional] 
**suspending_data** | **object** | Further data for the suspending state. | [optional] 

## Example

```python
from openapi_client.models.queued_resource_state import QueuedResourceState

# TODO update the JSON string below
json = "{}"
# create an instance of QueuedResourceState from a JSON string
queued_resource_state_instance = QueuedResourceState.from_json(json)
# print the JSON string representation of the object
print(QueuedResourceState.to_json())

# convert the object into a dict
queued_resource_state_dict = queued_resource_state_instance.to_dict()
# create an instance of QueuedResourceState from a dict
queued_resource_state_from_dict = QueuedResourceState.from_dict(queued_resource_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


