# GoogleCloudChannelV1TransferableSku

TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legacy_sku** | [**GoogleCloudChannelV1Sku**](GoogleCloudChannelV1Sku.md) |  | [optional] 
**sku** | [**GoogleCloudChannelV1Sku**](GoogleCloudChannelV1Sku.md) |  | [optional] 
**transfer_eligibility** | [**GoogleCloudChannelV1TransferEligibility**](GoogleCloudChannelV1TransferEligibility.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_transferable_sku import GoogleCloudChannelV1TransferableSku

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1TransferableSku from a JSON string
google_cloud_channel_v1_transferable_sku_instance = GoogleCloudChannelV1TransferableSku.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1TransferableSku.to_json())

# convert the object into a dict
google_cloud_channel_v1_transferable_sku_dict = google_cloud_channel_v1_transferable_sku_instance.to_dict()
# create an instance of GoogleCloudChannelV1TransferableSku from a dict
google_cloud_channel_v1_transferable_sku_from_dict = GoogleCloudChannelV1TransferableSku.from_dict(google_cloud_channel_v1_transferable_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


