# GoogleCloudChannelV1ListEntitlementsResponse

Response message for CloudChannelService.ListEntitlements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | [**List[GoogleCloudChannelV1Entitlement]**](GoogleCloudChannelV1Entitlement.md) | The reseller customer&#39;s entitlements. | [optional] 
**next_page_token** | **str** | A token to list the next page of results. Pass to ListEntitlementsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_entitlements_response import GoogleCloudChannelV1ListEntitlementsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListEntitlementsResponse from a JSON string
google_cloud_channel_v1_list_entitlements_response_instance = GoogleCloudChannelV1ListEntitlementsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListEntitlementsResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_entitlements_response_dict = google_cloud_channel_v1_list_entitlements_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListEntitlementsResponse from a dict
google_cloud_channel_v1_list_entitlements_response_from_dict = GoogleCloudChannelV1ListEntitlementsResponse.from_dict(google_cloud_channel_v1_list_entitlements_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


