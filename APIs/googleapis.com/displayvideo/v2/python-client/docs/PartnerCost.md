# PartnerCost

Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_type** | **str** | Required. The type of the partner cost. | [optional] 
**fee_amount** | **str** | The CPM fee amount in micros of advertiser&#39;s currency. Applicable when the fee_type is &#x60;PARTNER_FEE_TYPE_CPM_FEE&#x60;. Must be greater than or equal to 0. For example, for 1.5 standard unit of the advertiser&#39;s currency, set this field to 1500000. | [optional] 
**fee_percentage_millis** | **str** | The media fee percentage in millis (1/1000 of a percent). Applicable when the fee_type is &#x60;PARTNER_FEE_TYPE_MEDIA_FEE&#x60;. Must be greater than or equal to 0. For example: 100 represents 0.1%. | [optional] 
**fee_type** | **str** | Required. The fee type for this partner cost. | [optional] 
**invoice_type** | **str** | The invoice type for this partner cost. * Required when cost_type is one of: - &#x60;PARTNER_COST_TYPE_ADLOOX&#x60; - &#x60;PARTNER_COST_TYPE_DOUBLE_VERIFY&#x60; - &#x60;PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE&#x60;. * Output only for other types. | [optional] 

## Example

```python
from openapi_client.models.partner_cost import PartnerCost

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerCost from a JSON string
partner_cost_instance = PartnerCost.from_json(json)
# print the JSON string representation of the object
print(PartnerCost.to_json())

# convert the object into a dict
partner_cost_dict = partner_cost_instance.to_dict()
# create an instance of PartnerCost from a dict
partner_cost_from_dict = PartnerCost.from_dict(partner_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


