# CanceledStateContext

Information specific to a subscription in canceled state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_initiated_cancellation** | **object** | Information specific to cancellations initiated by developers. | [optional] 
**replacement_cancellation** | **object** | Information specific to cancellations caused by subscription replacement. | [optional] 
**system_initiated_cancellation** | **object** | Information specific to cancellations initiated by Google system. | [optional] 
**user_initiated_cancellation** | [**UserInitiatedCancellation**](UserInitiatedCancellation.md) |  | [optional] 

## Example

```python
from openapi_client.models.canceled_state_context import CanceledStateContext

# TODO update the JSON string below
json = "{}"
# create an instance of CanceledStateContext from a JSON string
canceled_state_context_instance = CanceledStateContext.from_json(json)
# print the JSON string representation of the object
print(CanceledStateContext.to_json())

# convert the object into a dict
canceled_state_context_dict = canceled_state_context_instance.to_dict()
# create an instance of CanceledStateContext from a dict
canceled_state_context_from_dict = CanceledStateContext.from_dict(canceled_state_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


