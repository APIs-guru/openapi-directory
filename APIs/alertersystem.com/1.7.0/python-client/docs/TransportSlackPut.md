# TransportSlackPut

The TransportSlack resource is a collection of transports that carry dispatched alerts to the external Slack service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**slack_channel** | **str** | The channel (channel, private group, or IM channel to send message to, it can be an encoded ID, or a name) for the Slack service. | 
**slack_token** | **str** | The token for the Slack service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_slack_put import TransportSlackPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSlackPut from a JSON string
transport_slack_put_instance = TransportSlackPut.from_json(json)
# print the JSON string representation of the object
print(TransportSlackPut.to_json())

# convert the object into a dict
transport_slack_put_dict = transport_slack_put_instance.to_dict()
# create an instance of TransportSlackPut from a dict
transport_slack_put_from_dict = TransportSlackPut.from_dict(transport_slack_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


