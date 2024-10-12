# GoogleCloudIntegrationsV1alphaSfdcChannel

The SfdcChannel that points to a CDC or Platform Event Channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_topic** | **str** | The Channel topic defined by salesforce once an channel is opened | [optional] 
**create_time** | **str** | Output only. Time when the channel is created | [optional] [readonly] 
**delete_time** | **str** | Output only. Time when the channel was deleted. Empty if not deleted. | [optional] [readonly] 
**description** | **str** | The description for this channel | [optional] 
**display_name** | **str** | Client level unique name/alias to easily reference a channel. | [optional] 
**is_active** | **bool** | Indicated if a channel has any active integrations referencing it. Set to false when the channel is created, and set to true if there is any integration published with the channel configured in it. | [optional] 
**last_replay_id** | **str** | Last sfdc messsage replay id for channel | [optional] 
**name** | **str** | Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}. | [optional] 
**update_time** | **str** | Output only. Time when the channel was last updated | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_sfdc_channel import GoogleCloudIntegrationsV1alphaSfdcChannel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaSfdcChannel from a JSON string
google_cloud_integrations_v1alpha_sfdc_channel_instance = GoogleCloudIntegrationsV1alphaSfdcChannel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaSfdcChannel.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_sfdc_channel_dict = google_cloud_integrations_v1alpha_sfdc_channel_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaSfdcChannel from a dict
google_cloud_integrations_v1alpha_sfdc_channel_from_dict = GoogleCloudIntegrationsV1alphaSfdcChannel.from_dict(google_cloud_integrations_v1alpha_sfdc_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


