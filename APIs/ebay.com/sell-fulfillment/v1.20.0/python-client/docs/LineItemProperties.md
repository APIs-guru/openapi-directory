# LineItemProperties

This type contains information about the eBay programs under which a line item was listed and sold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_protection** | **bool** | A value of &lt;code&gt;true&lt;/code&gt; indicates that the line item is covered by eBay&#39;s Buyer Protection program. | [optional] 
**from_best_offer** | **bool** | This field is only returned if &lt;code&gt;true&lt;/code&gt; and indicates that the purchase occurred by the buyer and seller mutually agreeing on a Best Offer amount. The Best Offer feature can be set up for any listing type, but if this feature is set up for an auction listing, it will no longer be available once a bid has been placed on the listing. | [optional] 
**sold_via_ad_campaign** | **bool** | This field is only returned if &lt;code&gt;true&lt;/code&gt; and indicates that the line item was sold as a result of a seller&#39;s ad campaign. | [optional] 

## Example

```python
from openapi_client.models.line_item_properties import LineItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LineItemProperties from a JSON string
line_item_properties_instance = LineItemProperties.from_json(json)
# print the JSON string representation of the object
print(LineItemProperties.to_json())

# convert the object into a dict
line_item_properties_dict = line_item_properties_instance.to_dict()
# create an instance of LineItemProperties from a dict
line_item_properties_from_dict = LineItemProperties.from_dict(line_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


