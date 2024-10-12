# TransportMattermostPut

The TransportMattermost resource is a collection of transports that carry dispatched alerts to the external Mattermost service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**mattermost_access_token** | **str** | The access token for the Mattermost service. Stored in encrypted format. | 
**mattermost_channel** | **str** | The default channel ID for the Mattermost service. | 
**mattermost_host** | **str** | The host for the Mattermost service. | 
**mattermost_path** | **str** | The optional path for the Mattermost service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mattermost_put import TransportMattermostPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMattermostPut from a JSON string
transport_mattermost_put_instance = TransportMattermostPut.from_json(json)
# print the JSON string representation of the object
print(TransportMattermostPut.to_json())

# convert the object into a dict
transport_mattermost_put_dict = transport_mattermost_put_instance.to_dict()
# create an instance of TransportMattermostPut from a dict
transport_mattermost_put_from_dict = TransportMattermostPut.from_dict(transport_mattermost_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


