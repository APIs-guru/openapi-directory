# TransportMessageBirdJsonldPut

The TransportMessageBird resource is a collection of transports that carry dispatched alerts to the external MessageBird service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**message_bird_from** | **str** | The sender value for the MessageBird service. | 
**message_bird_token** | **str** | The token for the MessageBird service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_message_bird_jsonld_put import TransportMessageBirdJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMessageBirdJsonldPut from a JSON string
transport_message_bird_jsonld_put_instance = TransportMessageBirdJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportMessageBirdJsonldPut.to_json())

# convert the object into a dict
transport_message_bird_jsonld_put_dict = transport_message_bird_jsonld_put_instance.to_dict()
# create an instance of TransportMessageBirdJsonldPut from a dict
transport_message_bird_jsonld_put_from_dict = TransportMessageBirdJsonldPut.from_dict(transport_message_bird_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


