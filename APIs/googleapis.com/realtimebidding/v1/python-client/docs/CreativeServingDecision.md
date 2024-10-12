# CreativeServingDecision

Top level status and detected attributes of a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_technology_providers** | [**AdTechnologyProviders**](AdTechnologyProviders.md) |  | [optional] 
**china_policy_compliance** | [**PolicyCompliance**](PolicyCompliance.md) |  | [optional] 
**deals_policy_compliance** | [**PolicyCompliance**](PolicyCompliance.md) |  | [optional] 
**detected_advertisers** | [**List[AdvertiserAndBrand]**](AdvertiserAndBrand.md) | Detected advertisers and brands. | [optional] 
**detected_attributes** | **List[str]** | Publisher-excludable attributes that were detected for this creative. Can be used to filter the response of the creatives.list method. If the &#x60;excluded_attribute&#x60; field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. | [optional] 
**detected_click_through_urls** | **List[str]** | The set of detected destination URLs for the creative. Can be used to filter the response of the creatives.list method. | [optional] 
**detected_domains** | **List[str]** | The detected domains for this creative. | [optional] 
**detected_languages** | **List[str]** | The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes. Can be used to filter the response of the creatives.list method. | [optional] 
**detected_product_categories** | **List[int]** | Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs. Can be used to filter the response of the creatives.list method. | [optional] 
**detected_sensitive_categories** | **List[int]** | Detected sensitive categories, if any. Can be used to filter the response of the creatives.list method. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids. | [optional] 
**detected_vendor_ids** | **List[int]** | IDs of the ad technology vendors that were detected to be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. If the &#x60;allowed_vendor_type&#x60; field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) does not contain one of the vendor type IDs that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. | [optional] 
**last_status_update** | **str** | The last time the creative status was updated. Can be used to filter the response of the creatives.list method. | [optional] 
**network_policy_compliance** | [**PolicyCompliance**](PolicyCompliance.md) |  | [optional] 
**platform_policy_compliance** | [**PolicyCompliance**](PolicyCompliance.md) |  | [optional] 
**russia_policy_compliance** | [**PolicyCompliance**](PolicyCompliance.md) |  | [optional] 

## Example

```python
from openapi_client.models.creative_serving_decision import CreativeServingDecision

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeServingDecision from a JSON string
creative_serving_decision_instance = CreativeServingDecision.from_json(json)
# print the JSON string representation of the object
print(CreativeServingDecision.to_json())

# convert the object into a dict
creative_serving_decision_dict = creative_serving_decision_instance.to_dict()
# create an instance of CreativeServingDecision from a dict
creative_serving_decision_from_dict = CreativeServingDecision.from_dict(creative_serving_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


