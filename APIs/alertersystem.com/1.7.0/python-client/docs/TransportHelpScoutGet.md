# TransportHelpScoutGet

The TransportHelpScout resource is a collection of transports that carry dispatched alerts to the external HelpScout service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**help_scout_customer_email** | **str** | The requester customer email address for the HelpScout service. | 
**help_scout_mailbox_id** | **int** | The mailbox ID for the HelpScout service. | [optional] 
**help_scout_oauth_token** | **str** | The OAuth token for the HelpScout service. Stored in encrypted format. | 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_help_scout_get import TransportHelpScoutGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportHelpScoutGet from a JSON string
transport_help_scout_get_instance = TransportHelpScoutGet.from_json(json)
# print the JSON string representation of the object
print(TransportHelpScoutGet.to_json())

# convert the object into a dict
transport_help_scout_get_dict = transport_help_scout_get_instance.to_dict()
# create an instance of TransportHelpScoutGet from a dict
transport_help_scout_get_from_dict = TransportHelpScoutGet.from_dict(transport_help_scout_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


