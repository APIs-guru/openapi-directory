# GoogleCloudChannelV1Product

A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketing_info** | [**GoogleCloudChannelV1MarketingInfo**](GoogleCloudChannelV1MarketingInfo.md) |  | [optional] 
**name** | **str** | Resource Name of the Product. Format: products/{product_id} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_product import GoogleCloudChannelV1Product

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Product from a JSON string
google_cloud_channel_v1_product_instance = GoogleCloudChannelV1Product.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Product.to_json())

# convert the object into a dict
google_cloud_channel_v1_product_dict = google_cloud_channel_v1_product_instance.to_dict()
# create an instance of GoogleCloudChannelV1Product from a dict
google_cloud_channel_v1_product_from_dict = GoogleCloudChannelV1Product.from_dict(google_cloud_channel_v1_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


