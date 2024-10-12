# GiftDetails

This type contains information about a digital gift card line item that was purchased as a gift and sent to the recipient by email.<br><br><span class=\"tablenote\"><strong>Note:</strong> <b>GiftDetails</b> will not be returned for any order that is more than 90 days old.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | This field contains the gift message from the buyer to the gift recipient. This field is only returned if the buyer of the gift included a message for the gift.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; The &lt;b&gt;message&lt;/b&gt; will not be returned for any order that is more than 90 days old.&lt;/span&gt; | [optional] 
**recipient_email** | **str** | The email address of the gift recipient. The seller will send the digital gift card to this email address.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; The &lt;b&gt;recipientEmail&lt;/b&gt; will not be returned for any order that is more than 90 days old.&lt;/span&gt; | [optional] 
**sender_name** | **str** | The name of the buyer, which will appear on the email that is sent to the gift recipient.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; The &lt;b&gt;senderName&lt;/b&gt; will not be returned for any order that is more than 90 days old.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.gift_details import GiftDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GiftDetails from a JSON string
gift_details_instance = GiftDetails.from_json(json)
# print the JSON string representation of the object
print(GiftDetails.to_json())

# convert the object into a dict
gift_details_dict = gift_details_instance.to_dict()
# create an instance of GiftDetails from a dict
gift_details_from_dict = GiftDetails.from_dict(gift_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


