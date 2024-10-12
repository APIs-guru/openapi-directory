# ChannelToStoreLinkDetailsBillingDetails

Information specific to billing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_status** | **str** | The current billing profile status. | [optional] 

## Example

```python
from openapi_client.models.channel_to_store_link_details_billing_details import ChannelToStoreLinkDetailsBillingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelToStoreLinkDetailsBillingDetails from a JSON string
channel_to_store_link_details_billing_details_instance = ChannelToStoreLinkDetailsBillingDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelToStoreLinkDetailsBillingDetails.to_json())

# convert the object into a dict
channel_to_store_link_details_billing_details_dict = channel_to_store_link_details_billing_details_instance.to_dict()
# create an instance of ChannelToStoreLinkDetailsBillingDetails from a dict
channel_to_store_link_details_billing_details_from_dict = ChannelToStoreLinkDetailsBillingDetails.from_dict(channel_to_store_link_details_billing_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


