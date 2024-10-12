# GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse

Response to list SfdcChannels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token used to retrieve the next page of results. | [optional] 
**sfdc_channels** | [**List[GoogleCloudIntegrationsV1alphaSfdcChannel]**](GoogleCloudIntegrationsV1alphaSfdcChannel.md) | The list of SfdcChannels retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_sfdc_channels_response import GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse from a JSON string
google_cloud_integrations_v1alpha_list_sfdc_channels_response_instance = GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_sfdc_channels_response_dict = google_cloud_integrations_v1alpha_list_sfdc_channels_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse from a dict
google_cloud_integrations_v1alpha_list_sfdc_channels_response_from_dict = GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse.from_dict(google_cloud_integrations_v1alpha_list_sfdc_channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


