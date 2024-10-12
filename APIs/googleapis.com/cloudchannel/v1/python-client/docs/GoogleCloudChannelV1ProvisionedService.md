# GoogleCloudChannelV1ProvisionedService

Service provisioned for an entitlement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | Output only. The product pertaining to the provisioning resource as specified in the Offer. | [optional] [readonly] 
**provisioning_id** | **str** | Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud, this is the Billing Account ID of the billing subaccount. | [optional] [readonly] 
**sku_id** | **str** | Output only. The SKU pertaining to the provisioning resource as specified in the Offer. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_provisioned_service import GoogleCloudChannelV1ProvisionedService

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ProvisionedService from a JSON string
google_cloud_channel_v1_provisioned_service_instance = GoogleCloudChannelV1ProvisionedService.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ProvisionedService.to_json())

# convert the object into a dict
google_cloud_channel_v1_provisioned_service_dict = google_cloud_channel_v1_provisioned_service_instance.to_dict()
# create an instance of GoogleCloudChannelV1ProvisionedService from a dict
google_cloud_channel_v1_provisioned_service_from_dict = GoogleCloudChannelV1ProvisionedService.from_dict(google_cloud_channel_v1_provisioned_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


