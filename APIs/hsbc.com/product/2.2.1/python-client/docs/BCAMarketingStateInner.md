# BCAMarketingStateInner

The marketing state (promotional or regular) of the BCA Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_product** | **object** | BCA core product details. | [optional] 
**credit_interest** | **object** | Details about the interest that may be payable to the BCA account holders | [optional] 
**eligibility** | **object** | Eligibility details for this product i.e. the criteria that an accountholder has to meet in order to be eligible for the BCA product. | [optional] 
**features_and_benefits** | **object** | Feature And Benefits Details | [optional] 
**first_marketed_date** | **date** | Marketing state start date | [optional] 
**identification** | **str** | Unique and unambiguous identification of a  BCA Product Marketing State. | 
**last_marketed_date** | **date** | Marketing state end date | [optional] 
**marketing_state** | **str** | Describes the marketing state (regular or promotional) of the BCA Product | 
**notes** | **List[str]** | Free text for adding details for marketing state | [optional] 
**other_fees_charges** | [**List[OtherFeesChargesInner]**](OtherFeesChargesInner.md) | Contains details of fees and charges which are not associated with either Overdraft or features/benefits | 
**overdraft** | **object** | Borrowing details | [optional] 
**predecessor_id** | **str** | Identifies the marketing state that precedes this marketing state | [optional] 
**state_tenure_length** | **float** | The length/duration of a promotional state | [optional] 
**state_tenure_period** | **str** | The unit of period (days, weeks, months etc.) of the promotional length | [optional] 

## Example

```python
from openapi_client.models.bca_marketing_state_inner import BCAMarketingStateInner

# TODO update the JSON string below
json = "{}"
# create an instance of BCAMarketingStateInner from a JSON string
bca_marketing_state_inner_instance = BCAMarketingStateInner.from_json(json)
# print the JSON string representation of the object
print(BCAMarketingStateInner.to_json())

# convert the object into a dict
bca_marketing_state_inner_dict = bca_marketing_state_inner_instance.to_dict()
# create an instance of BCAMarketingStateInner from a dict
bca_marketing_state_inner_from_dict = BCAMarketingStateInner.from_dict(bca_marketing_state_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


