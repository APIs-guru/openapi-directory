# InternationalReturnOverrideType

This type defines the fields for a seller's international return policy. Sellers have the ability to set separate domestic and international return policies, but if an international return policy is not set, the same return policy settings specified for the domestic return policy are also used for returns for international buyers. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_method** | **str** | This field sets/indicates if the seller offers replacement items to the buyer in the case of an international return. The buyer must be willing to accept a replacement item; otherwise, the seller will need to issue a refund for a return. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**return_period** | [**TimeDuration**](TimeDuration.md) |  | [optional] 
**return_shipping_cost_payer** | **str** | This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either &lt;code&gt;BUYER&lt;/code&gt; or &lt;code&gt;SELLER&lt;/code&gt;.  &lt;br/&gt;&lt;br/&gt;Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for &#39;significantly not as described&#39; (SNAD) issues.  &lt;br/&gt;&lt;br/&gt;This field is conditionally required if the &lt;b&gt;internationalOverride.returnsAccepted&lt;/b&gt; field is set to &lt;code&gt;true&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**returns_accepted** | **bool** | If set to &lt;code&gt;true&lt;/code&gt;, the seller accepts international returns. If set to &lt;code&gt;false&lt;/code&gt;, the seller does not accept international returns.  &lt;br/&gt;&lt;br/&gt;This field is conditionally required if the seller chooses to have a separate international return policy. | [optional] 

## Example

```python
from openapi_client.models.international_return_override_type import InternationalReturnOverrideType

# TODO update the JSON string below
json = "{}"
# create an instance of InternationalReturnOverrideType from a JSON string
international_return_override_type_instance = InternationalReturnOverrideType.from_json(json)
# print the JSON string representation of the object
print(InternationalReturnOverrideType.to_json())

# convert the object into a dict
international_return_override_type_dict = international_return_override_type_instance.to_dict()
# create an instance of InternationalReturnOverrideType from a dict
international_return_override_type_from_dict = InternationalReturnOverrideType.from_dict(international_return_override_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


