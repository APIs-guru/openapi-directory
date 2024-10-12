# GoogleCloudChannelV1alpha1TransferEntitlementsResponse

Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | [**List[GoogleCloudChannelV1alpha1Entitlement]**](GoogleCloudChannelV1alpha1Entitlement.md) | The transferred entitlements. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_transfer_entitlements_response import GoogleCloudChannelV1alpha1TransferEntitlementsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1TransferEntitlementsResponse from a JSON string
google_cloud_channel_v1alpha1_transfer_entitlements_response_instance = GoogleCloudChannelV1alpha1TransferEntitlementsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1TransferEntitlementsResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_transfer_entitlements_response_dict = google_cloud_channel_v1alpha1_transfer_entitlements_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1TransferEntitlementsResponse from a dict
google_cloud_channel_v1alpha1_transfer_entitlements_response_from_dict = GoogleCloudChannelV1alpha1TransferEntitlementsResponse.from_dict(google_cloud_channel_v1alpha1_transfer_entitlements_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


