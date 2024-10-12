# GoogleCloudChannelV1Offer

Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**GoogleCloudChannelV1Constraints**](GoogleCloudChannelV1Constraints.md) |  | [optional] 
**deal_code** | **str** | The deal code of the offer to get a special promotion or discount. | [optional] 
**end_time** | **str** | Output only. End of the Offer validity time. | [optional] [readonly] 
**marketing_info** | [**GoogleCloudChannelV1MarketingInfo**](GoogleCloudChannelV1MarketingInfo.md) |  | [optional] 
**name** | **str** | Resource Name of the Offer. Format: accounts/{account_id}/offers/{offer_id} | [optional] 
**parameter_definitions** | [**List[GoogleCloudChannelV1ParameterDefinition]**](GoogleCloudChannelV1ParameterDefinition.md) | Parameters required to use current Offer to purchase. | [optional] 
**plan** | [**GoogleCloudChannelV1Plan**](GoogleCloudChannelV1Plan.md) |  | [optional] 
**price_by_resources** | [**List[GoogleCloudChannelV1PriceByResource]**](GoogleCloudChannelV1PriceByResource.md) | Price for each monetizable resource type. | [optional] 
**sku** | [**GoogleCloudChannelV1Sku**](GoogleCloudChannelV1Sku.md) |  | [optional] 
**start_time** | **str** | Start of the Offer validity time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_offer import GoogleCloudChannelV1Offer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Offer from a JSON string
google_cloud_channel_v1_offer_instance = GoogleCloudChannelV1Offer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Offer.to_json())

# convert the object into a dict
google_cloud_channel_v1_offer_dict = google_cloud_channel_v1_offer_instance.to_dict()
# create an instance of GoogleCloudChannelV1Offer from a dict
google_cloud_channel_v1_offer_from_dict = GoogleCloudChannelV1Offer.from_dict(google_cloud_channel_v1_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


