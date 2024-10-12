# TransportMattermostPost

The TransportMattermost resource is a collection of transports that carry dispatched alerts to the external Mattermost service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**mattermost_access_token** | **str** | The access token for the Mattermost service. Stored in encrypted format. | 
**mattermost_channel** | **str** | The default channel ID for the Mattermost service. | 
**mattermost_host** | **str** | The host for the Mattermost service. | 
**mattermost_path** | **str** | The optional path for the Mattermost service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_mattermost_post import TransportMattermostPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportMattermostPost from a JSON string
transport_mattermost_post_instance = TransportMattermostPost.from_json(json)
# print the JSON string representation of the object
print(TransportMattermostPost.to_json())

# convert the object into a dict
transport_mattermost_post_dict = transport_mattermost_post_instance.to_dict()
# create an instance of TransportMattermostPost from a dict
transport_mattermost_post_from_dict = TransportMattermostPost.from_dict(transport_mattermost_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


