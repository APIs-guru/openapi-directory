# GoogleCloudChannelV1BillableSku

Represents the Billable SKU information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | Resource name of Service which contains Repricing SKU. Format: services/{service}. Example: \&quot;services/B7D9-FDCB-15D8\&quot;. | [optional] 
**service_display_name** | **str** | Unique human readable name for the Service. | [optional] 
**sku** | **str** | Resource name of Billable SKU. Format: billableSkus/{sku}. Example: billableSkus/6E1B-6634-470F\&quot;. | [optional] 
**sku_display_name** | **str** | Unique human readable name for the SKU. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_billable_sku import GoogleCloudChannelV1BillableSku

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1BillableSku from a JSON string
google_cloud_channel_v1_billable_sku_instance = GoogleCloudChannelV1BillableSku.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1BillableSku.to_json())

# convert the object into a dict
google_cloud_channel_v1_billable_sku_dict = google_cloud_channel_v1_billable_sku_instance.to_dict()
# create an instance of GoogleCloudChannelV1BillableSku from a dict
google_cloud_channel_v1_billable_sku_from_dict = GoogleCloudChannelV1BillableSku.from_dict(google_cloud_channel_v1_billable_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


