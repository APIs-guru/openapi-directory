# GoogleCloudChannelV1ListEntitlementChangesResponse

Response message for CloudChannelService.ListEntitlementChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_changes** | [**List[GoogleCloudChannelV1EntitlementChange]**](GoogleCloudChannelV1EntitlementChange.md) | The list of entitlement changes. | [optional] 
**next_page_token** | **str** | A token to list the next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_entitlement_changes_response import GoogleCloudChannelV1ListEntitlementChangesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListEntitlementChangesResponse from a JSON string
google_cloud_channel_v1_list_entitlement_changes_response_instance = GoogleCloudChannelV1ListEntitlementChangesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListEntitlementChangesResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_entitlement_changes_response_dict = google_cloud_channel_v1_list_entitlement_changes_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListEntitlementChangesResponse from a dict
google_cloud_channel_v1_list_entitlement_changes_response_from_dict = GoogleCloudChannelV1ListEntitlementChangesResponse.from_dict(google_cloud_channel_v1_list_entitlement_changes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


