# CustomEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**EventLinks**](EventLinks.md) |  | [optional] 
**var_from** | **str** | The member ID of the sender | [optional] 
**id** | **int** | The ID of the event | [optional] 
**timestamp** | **str** | The time that the event happened | [optional] 
**body** | **object** | The body of your &#x60;custom&#x60; event | [optional] 
**type** | **str** | The event type (&#x60;custom:&lt;YOUR_IDENTIFIER&gt;&#x60;) | [optional] 

## Example

```python
from openapi_client.models.custom_event import CustomEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEvent from a JSON string
custom_event_instance = CustomEvent.from_json(json)
# print the JSON string representation of the object
print(CustomEvent.to_json())

# convert the object into a dict
custom_event_dict = custom_event_instance.to_dict()
# create an instance of CustomEvent from a dict
custom_event_from_dict = CustomEvent.from_dict(custom_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


