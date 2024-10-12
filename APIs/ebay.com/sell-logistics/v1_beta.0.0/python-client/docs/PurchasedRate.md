# PurchasedRate

The \"rate\" that has been selected and purchased for the shipment, as referenced by the <b>rateId</b> value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_options** | [**List[AdditionalOption]**](AdditionalOption.md) | An list of additional, optional features that have been purchased for the shipment. | [optional] 
**base_shipping_cost** | [**Amount**](Amount.md) |  | [optional] 
**destination_time_zone** | **str** | The time zone of the destination according to &lt;a href&#x3D;\&quot;https://www.iana.org/time-zones\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Time Zone Database&lt;/a&gt;. For example, \&quot;America/Los_Angeles\&quot;. | [optional] 
**max_estimated_delivery_date** | **str** | A string value representing maximum (latest) estimated delivery time, formatted as an &lt;a href&#x3D;\&quot;https://www.iso.org/iso-8601-date-and-time-format.html\&quot; title&#x3D;\&quot;https://www.iso.org\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 8601&lt;/a&gt; string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2018-08-20T07:09:00.000Z&lt;/code&gt; | [optional] 
**min_estimated_delivery_date** | **str** | A string value representing minimum (earliest) estimated delivery time, formatted as an &lt;a href&#x3D;\&quot;https://www.iso.org/iso-8601-date-and-time-format.html\&quot; title&#x3D;\&quot;https://www.iso.org\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 8601&lt;/a&gt;ISO 8601&lt;/a&gt; UTC string. | [optional] 
**pickup_networks** | **List[str]** | A list of pickup networks compatible with the shipping service. | [optional] 
**pickup_slot_id** | **str** | This unique eBay-assigned ID value is returned only if the shipment has been configured for a scheduled pickup. | [optional] 
**pickup_type** | **str** | The type of pickup or drop off configured for the shipment. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**rate_id** | **str** | The eBay-generated ID of the shipping rate that the seller has chosen to purchase for the shipment. | [optional] 
**shipping_carrier_code** | **str** | The ID code for the carrier that was selected for the package shipment. | [optional] 
**shipping_carrier_name** | **str** | The name of the shipping carrier. | [optional] 
**shipping_quote_id** | **str** | The unique eBay-generated ID of the &lt;i&gt;shipping quote&lt;/i&gt; from which the seller selected a shipping rate (&lt;b&gt;rateId&lt;/b&gt;). | [optional] 
**shipping_service_code** | **str** | String ID code for the shipping service selected for the package shipment. This is a service that the shipping carrier supplies. | [optional] 
**shipping_service_name** | **str** | The name of the shipping service. | [optional] 
**total_shipping_cost** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchased_rate import PurchasedRate

# TODO update the JSON string below
json = "{}"
# create an instance of PurchasedRate from a JSON string
purchased_rate_instance = PurchasedRate.from_json(json)
# print the JSON string representation of the object
print(PurchasedRate.to_json())

# convert the object into a dict
purchased_rate_dict = purchased_rate_instance.to_dict()
# create an instance of PurchasedRate from a dict
purchased_rate_from_dict = PurchasedRate.from_dict(purchased_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


