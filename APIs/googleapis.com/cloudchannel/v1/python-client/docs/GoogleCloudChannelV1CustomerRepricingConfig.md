# GoogleCloudChannelV1CustomerRepricingConfig

Configuration for how a reseller will reprice a Customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}. | [optional] [readonly] 
**repricing_config** | [**GoogleCloudChannelV1RepricingConfig**](GoogleCloudChannelV1RepricingConfig.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp of an update to the repricing rule. If &#x60;update_time&#x60; is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_customer_repricing_config import GoogleCloudChannelV1CustomerRepricingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1CustomerRepricingConfig from a JSON string
google_cloud_channel_v1_customer_repricing_config_instance = GoogleCloudChannelV1CustomerRepricingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1CustomerRepricingConfig.to_json())

# convert the object into a dict
google_cloud_channel_v1_customer_repricing_config_dict = google_cloud_channel_v1_customer_repricing_config_instance.to_dict()
# create an instance of GoogleCloudChannelV1CustomerRepricingConfig from a dict
google_cloud_channel_v1_customer_repricing_config_from_dict = GoogleCloudChannelV1CustomerRepricingConfig.from_dict(google_cloud_channel_v1_customer_repricing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


