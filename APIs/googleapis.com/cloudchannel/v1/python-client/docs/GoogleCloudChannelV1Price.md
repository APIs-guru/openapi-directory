# GoogleCloudChannelV1Price

Represents the price of the Offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_price** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**discount** | **float** | Discount percentage, represented as decimal. For example, a 20% discount will be represent as 0.2. | [optional] 
**effective_price** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**external_price_uri** | **str** | Link to external price list, such as link to Google Voice rate card. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_price import GoogleCloudChannelV1Price

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Price from a JSON string
google_cloud_channel_v1_price_instance = GoogleCloudChannelV1Price.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Price.to_json())

# convert the object into a dict
google_cloud_channel_v1_price_dict = google_cloud_channel_v1_price_instance.to_dict()
# create an instance of GoogleCloudChannelV1Price from a dict
google_cloud_channel_v1_price_from_dict = GoogleCloudChannelV1Price.from_dict(google_cloud_channel_v1_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


