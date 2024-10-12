# Conversion

A conversion containing data relevant to DoubleClick Search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | DS ad group ID. | [optional] 
**ad_id** | **str** | DS ad ID. | [optional] 
**ad_user_data_consent** | **str** | Represents consent for core platform services (CPS) preferences in settings. No default value. Acceptable values are: GRANTED: The desired consent status is to grant. Read the CPS preferences from GTE settings. DENIED: The desired consent status is to deny; CPS list is empty. | [optional] 
**advertiser_id** | **str** | DS advertiser ID. | [optional] 
**agency_id** | **str** | DS agency ID. | [optional] 
**attribution_model** | **str** | Available to advertisers only after contacting DoubleClick Search customer support. | [optional] 
**campaign_id** | **str** | DS campaign ID. | [optional] 
**channel** | **str** | Sales channel for the product. Acceptable values are: - \&quot;&#x60;local&#x60;\&quot;: a physical store - \&quot;&#x60;online&#x60;\&quot;: an online store  | [optional] 
**click_id** | **str** | DS click ID for the conversion. | [optional] 
**conversion_id** | **str** | For offline conversions, advertisers provide this ID. Advertisers can specify any ID that is meaningful to them. Each conversion in a request must specify a unique ID, and the combination of ID and timestamp must be unique amongst all conversions within the advertiser. For online conversions, DS copies the &#x60;dsConversionId&#x60; or &#x60;floodlightOrderId&#x60; into this property depending on the advertiser&#39;s Floodlight instructions. | [optional] 
**conversion_modified_timestamp** | **str** | The time at which the conversion was last modified, in epoch millis UTC. | [optional] 
**conversion_timestamp** | **str** | The time at which the conversion took place, in epoch millis UTC. | [optional] 
**count_millis** | **str** | Available to advertisers only after contacting DoubleClick Search customer support. | [optional] 
**criterion_id** | **str** | DS criterion (keyword) ID. | [optional] 
**currency_code** | **str** | The currency code for the conversion&#39;s revenue. Should be in ISO 4217 alphabetic (3-char) format. | [optional] 
**custom_dimension** | [**List[CustomDimension]**](CustomDimension.md) | Custom dimensions for the conversion, which can be used to filter data in a report. | [optional] 
**custom_metric** | [**List[CustomMetric]**](CustomMetric.md) | Custom metrics for the conversion. | [optional] 
**customer_id** | **str** | Customer ID of a client account in the new Search Ads 360 experience. | [optional] 
**device_type** | **str** | The type of device on which the conversion occurred. | [optional] 
**ds_conversion_id** | **str** | ID that DoubleClick Search generates for each conversion. | [optional] 
**engine_account_id** | **str** | DS engine account ID. | [optional] 
**floodlight_order_id** | **str** | The Floodlight order ID provided by the advertiser for the conversion. | [optional] 
**inventory_account_id** | **str** | ID that DS generates and uses to uniquely identify the inventory account that contains the product. | [optional] 
**product_country** | **str** | The country registered for the Merchant Center feed that contains the product. Use an ISO 3166 code to specify a country. | [optional] 
**product_group_id** | **str** | DS product group ID. | [optional] 
**product_id** | **str** | The product ID (SKU). | [optional] 
**product_language** | **str** | The language registered for the Merchant Center feed that contains the product. Use an ISO 639 code to specify a language. | [optional] 
**quantity_millis** | **str** | The quantity of this conversion, in millis. | [optional] 
**revenue_micros** | **str** | The revenue amount of this &#x60;TRANSACTION&#x60; conversion, in micros (value multiplied by 1000000, no decimal). For example, to specify a revenue value of \&quot;10\&quot; enter \&quot;10000000\&quot; (10 million) in your request. | [optional] 
**segmentation_id** | **str** | The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID). | [optional] 
**segmentation_name** | **str** | The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name). | [optional] 
**segmentation_type** | **str** | The segmentation type of this conversion (for example, &#x60;FLOODLIGHT&#x60;). | [optional] 
**state** | **str** | The state of the conversion, that is, either &#x60;ACTIVE&#x60; or &#x60;REMOVED&#x60;. Note: state DELETED is deprecated. | [optional] 
**store_id** | **str** | The ID of the local store for which the product was advertised. Applicable only when the channel is \&quot;&#x60;local&#x60;\&quot;. | [optional] 
**type** | **str** | The type of the conversion, that is, either &#x60;ACTION&#x60; or &#x60;TRANSACTION&#x60;. An &#x60;ACTION&#x60; conversion is an action by the user that has no monetarily quantifiable value, while a &#x60;TRANSACTION&#x60; conversion is an action that does have a monetarily quantifiable value. Examples are email list signups (&#x60;ACTION&#x60;) versus ecommerce purchases (&#x60;TRANSACTION&#x60;). | [optional] 

## Example

```python
from openapi_client.models.conversion import Conversion

# TODO update the JSON string below
json = "{}"
# create an instance of Conversion from a JSON string
conversion_instance = Conversion.from_json(json)
# print the JSON string representation of the object
print(Conversion.to_json())

# convert the object into a dict
conversion_dict = conversion_instance.to_dict()
# create an instance of Conversion from a dict
conversion_from_dict = Conversion.from_dict(conversion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


