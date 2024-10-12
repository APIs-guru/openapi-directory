# AuxiliaryMessage

Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:\"Given printer is invalid or no longer supported.\"}

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auxiliary_message** | **str** | Human readable message in English. Example: \&quot;Given printer is invalid or no longer supported.\&quot; | [optional] 
**field_mask** | **str** | Field that this message concerns. | [optional] 
**severity** | **str** | Message severity | [optional] 

## Example

```python
from openapi_client.models.auxiliary_message import AuxiliaryMessage

# TODO update the JSON string below
json = "{}"
# create an instance of AuxiliaryMessage from a JSON string
auxiliary_message_instance = AuxiliaryMessage.from_json(json)
# print the JSON string representation of the object
print(AuxiliaryMessage.to_json())

# convert the object into a dict
auxiliary_message_dict = auxiliary_message_instance.to_dict()
# create an instance of AuxiliaryMessage from a dict
auxiliary_message_from_dict = AuxiliaryMessage.from_dict(auxiliary_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


