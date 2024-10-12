# TransportSlackJsonldGet

The TransportSlack resource is a collection of transports that carry dispatched alerts to the external Slack service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**slack_channel** | **str** | The channel (channel, private group, or IM channel to send message to, it can be an encoded ID, or a name) for the Slack service. | 
**slack_token** | **str** | The token for the Slack service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_slack_jsonld_get import TransportSlackJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSlackJsonldGet from a JSON string
transport_slack_jsonld_get_instance = TransportSlackJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TransportSlackJsonldGet.to_json())

# convert the object into a dict
transport_slack_jsonld_get_dict = transport_slack_jsonld_get_instance.to_dict()
# create an instance of TransportSlackJsonldGet from a dict
transport_slack_jsonld_get_from_dict = TransportSlackJsonldGet.from_dict(transport_slack_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


