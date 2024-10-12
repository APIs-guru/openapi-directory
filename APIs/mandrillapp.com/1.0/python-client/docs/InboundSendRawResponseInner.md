# InboundSendRawResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**pattern** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.inbound_send_raw_response_inner import InboundSendRawResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of InboundSendRawResponseInner from a JSON string
inbound_send_raw_response_inner_instance = InboundSendRawResponseInner.from_json(json)
# print the JSON string representation of the object
print(InboundSendRawResponseInner.to_json())

# convert the object into a dict
inbound_send_raw_response_inner_dict = inbound_send_raw_response_inner_instance.to_dict()
# create an instance of InboundSendRawResponseInner from a dict
inbound_send_raw_response_inner_from_dict = InboundSendRawResponseInner.from_dict(inbound_send_raw_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


