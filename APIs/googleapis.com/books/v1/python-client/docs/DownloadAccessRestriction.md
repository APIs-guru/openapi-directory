# DownloadAccessRestriction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_allowed** | **bool** | If restricted, whether access is granted for this (user, device, volume). | [optional] 
**downloads_acquired** | **int** | If restricted, the number of content download licenses already acquired (including the requesting client, if licensed). | [optional] 
**just_acquired** | **bool** | If deviceAllowed, whether access was just acquired with this request. | [optional] 
**kind** | **str** | Resource type. | [optional] 
**max_download_devices** | **int** | If restricted, the maximum number of content download licenses for this volume. | [optional] 
**message** | **str** | Error/warning message. | [optional] 
**nonce** | **str** | Client nonce for verification. Download access and client-validation only. | [optional] 
**reason_code** | **str** | Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS | [optional] 
**restricted** | **bool** | Whether this volume has any download access restrictions. | [optional] 
**signature** | **str** | Response signature. | [optional] 
**source** | **str** | Client app identifier for verification. Download access and client-validation only. | [optional] 
**volume_id** | **str** | Identifies the volume for which this entry applies. | [optional] 

## Example

```python
from openapi_client.models.download_access_restriction import DownloadAccessRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadAccessRestriction from a JSON string
download_access_restriction_instance = DownloadAccessRestriction.from_json(json)
# print the JSON string representation of the object
print(DownloadAccessRestriction.to_json())

# convert the object into a dict
download_access_restriction_dict = download_access_restriction_instance.to_dict()
# create an instance of DownloadAccessRestriction from a dict
download_access_restriction_from_dict = DownloadAccessRestriction.from_dict(download_access_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


