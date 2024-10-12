# PartnerRevenueModel

Settings that control how partner revenue is calculated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**markup_amount** | **str** | Required. The markup amount of the partner revenue model. Must be greater than or equal to 0. * When the markup_type is set to be &#x60;PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM&#x60;, this field represents the CPM markup in micros of advertiser&#39;s currency. For example, 1500000 represents 1.5 standard units of the currency. * When the markup_type is set to be &#x60;PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP&#x60;, this field represents the media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). * When the markup_type is set to be &#x60;PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP&#x60;, this field represents the total media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). | [optional] 
**markup_type** | **str** | Required. The markup type of the partner revenue model. | [optional] 

## Example

```python
from openapi_client.models.partner_revenue_model import PartnerRevenueModel

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerRevenueModel from a JSON string
partner_revenue_model_instance = PartnerRevenueModel.from_json(json)
# print the JSON string representation of the object
print(PartnerRevenueModel.to_json())

# convert the object into a dict
partner_revenue_model_dict = partner_revenue_model_instance.to_dict()
# create an instance of PartnerRevenueModel from a dict
partner_revenue_model_from_dict = PartnerRevenueModel.from_dict(partner_revenue_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


