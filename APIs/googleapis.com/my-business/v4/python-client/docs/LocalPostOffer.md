# LocalPostOffer

Specific fields for offer posts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coupon_code** | **str** | Optional. Offer code that is usable in store or online. | [optional] 
**redeem_online_url** | **str** | Optional. Online link to redeem offer. | [optional] 
**terms_conditions** | **str** | Optional. Offer terms and conditions. | [optional] 

## Example

```python
from openapi_client.models.local_post_offer import LocalPostOffer

# TODO update the JSON string below
json = "{}"
# create an instance of LocalPostOffer from a JSON string
local_post_offer_instance = LocalPostOffer.from_json(json)
# print the JSON string representation of the object
print(LocalPostOffer.to_json())

# convert the object into a dict
local_post_offer_dict = local_post_offer_instance.to_dict()
# create an instance of LocalPostOffer from a dict
local_post_offer_from_dict = LocalPostOffer.from_dict(local_post_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


