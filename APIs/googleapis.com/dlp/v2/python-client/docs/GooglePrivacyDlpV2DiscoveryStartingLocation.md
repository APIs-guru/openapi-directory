# GooglePrivacyDlpV2DiscoveryStartingLocation

The location to begin a discovery scan. Denotes an organization ID or folder ID within an organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_id** | **str** | The ID of the Folder within an organization to scan. | [optional] 
**organization_id** | **str** | The ID of an organization to scan. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_discovery_starting_location import GooglePrivacyDlpV2DiscoveryStartingLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DiscoveryStartingLocation from a JSON string
google_privacy_dlp_v2_discovery_starting_location_instance = GooglePrivacyDlpV2DiscoveryStartingLocation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DiscoveryStartingLocation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_discovery_starting_location_dict = google_privacy_dlp_v2_discovery_starting_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DiscoveryStartingLocation from a dict
google_privacy_dlp_v2_discovery_starting_location_from_dict = GooglePrivacyDlpV2DiscoveryStartingLocation.from_dict(google_privacy_dlp_v2_discovery_starting_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


