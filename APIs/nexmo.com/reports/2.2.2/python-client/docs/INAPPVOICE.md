# INAPPVOICE

In App Voice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_id** | **str** | Search only for In App Voive calls attached to this particular Conversation. This should include the \&quot;CON-\&quot; prefix. | [optional] 
**product** | [**ProductInAppVoice**](ProductInAppVoice.md) |  | [optional] 

## Example

```python
from openapi_client.models.inappvoice import INAPPVOICE

# TODO update the JSON string below
json = "{}"
# create an instance of INAPPVOICE from a JSON string
inappvoice_instance = INAPPVOICE.from_json(json)
# print the JSON string representation of the object
print(INAPPVOICE.to_json())

# convert the object into a dict
inappvoice_dict = inappvoice_instance.to_dict()
# create an instance of INAPPVOICE from a dict
inappvoice_from_dict = INAPPVOICE.from_dict(inappvoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


