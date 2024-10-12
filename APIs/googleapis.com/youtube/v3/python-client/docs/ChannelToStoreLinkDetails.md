# ChannelToStoreLinkDetails

Information specific to a store on a merchandising platform linked to a YouTube channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_details** | [**ChannelToStoreLinkDetailsBillingDetails**](ChannelToStoreLinkDetailsBillingDetails.md) |  | [optional] 
**merchant_id** | **str** | Google Merchant Center id of the store. | [optional] 
**store_name** | **str** | Name of the store. | [optional] 
**store_url** | **str** | Landing page of the store. | [optional] 

## Example

```python
from openapi_client.models.channel_to_store_link_details import ChannelToStoreLinkDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelToStoreLinkDetails from a JSON string
channel_to_store_link_details_instance = ChannelToStoreLinkDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelToStoreLinkDetails.to_json())

# convert the object into a dict
channel_to_store_link_details_dict = channel_to_store_link_details_instance.to_dict()
# create an instance of ChannelToStoreLinkDetails from a dict
channel_to_store_link_details_from_dict = ChannelToStoreLinkDetails.from_dict(channel_to_store_link_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


