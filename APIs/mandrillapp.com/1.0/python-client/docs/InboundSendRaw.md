# InboundSendRaw


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_address** | **str** |  | [optional] 
**helo** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**mail_from** | **str** |  | [optional] 
**raw_message** | **str** |  | [optional] 
**to** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.inbound_send_raw import InboundSendRaw

# TODO update the JSON string below
json = "{}"
# create an instance of InboundSendRaw from a JSON string
inbound_send_raw_instance = InboundSendRaw.from_json(json)
# print the JSON string representation of the object
print(InboundSendRaw.to_json())

# convert the object into a dict
inbound_send_raw_dict = inbound_send_raw_instance.to_dict()
# create an instance of InboundSendRaw from a dict
inbound_send_raw_from_dict = InboundSendRaw.from_dict(inbound_send_raw_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


