# GoogleCloudChannelV1ListSubscribersResponse

Response Message for ListSubscribers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**service_accounts** | **List[str]** | List of service accounts which have subscriber access to the topic. | [optional] 
**topic** | **str** | Name of the topic registered with the reseller. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_subscribers_response import GoogleCloudChannelV1ListSubscribersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListSubscribersResponse from a JSON string
google_cloud_channel_v1_list_subscribers_response_instance = GoogleCloudChannelV1ListSubscribersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListSubscribersResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_subscribers_response_dict = google_cloud_channel_v1_list_subscribers_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListSubscribersResponse from a dict
google_cloud_channel_v1_list_subscribers_response_from_dict = GoogleCloudChannelV1ListSubscribersResponse.from_dict(google_cloud_channel_v1_list_subscribers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


