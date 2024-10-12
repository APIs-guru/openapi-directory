# CCCMarketingStateInner

The marketing state (promotional or regular) of the CCC Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_product** | **object** | CCC core product details. | 
**eligibility** | **object** | Eligibility details for this product i.e. the criteria that an accountholder has to meet in order to be eligible for the CCC product. | 
**features_and_benefits** | **object** | Feature And Benefits Details | 
**first_marketed_date** | **date** | Marketing state start date | [optional] 
**identification** | **str** | Unique and unambiguous identification of a  CCC Product Marketing State. | 
**last_marketed_date** | **date** | Marketing state end date | [optional] 
**marketing_state** | **str** | Describes the marketing state (regular or promotional) of the CCC Product | 
**notes** | **List[str]** | Free text for adding details for marketing state | [optional] 
**other_fees_charges** | **object** | Contains details of fees and charges which are not associated with either NonRepayment or features/benefits | 
**predecessor_id** | **str** | Identifies the marketing state that precedes this marketing state | [optional] 
**repayment** | **object** | Repayment details of the CCC product | [optional] 
**state_tenure_length** | **float** | The length/duration of a promotional state | [optional] 
**state_tenure_period** | **str** | The unit of period (days, weeks, months etc.) of the promotional length | [optional] 

## Example

```python
from openapi_client.models.ccc_marketing_state_inner import CCCMarketingStateInner

# TODO update the JSON string below
json = "{}"
# create an instance of CCCMarketingStateInner from a JSON string
ccc_marketing_state_inner_instance = CCCMarketingStateInner.from_json(json)
# print the JSON string representation of the object
print(CCCMarketingStateInner.to_json())

# convert the object into a dict
ccc_marketing_state_inner_dict = ccc_marketing_state_inner_instance.to_dict()
# create an instance of CCCMarketingStateInner from a dict
ccc_marketing_state_inner_from_dict = CCCMarketingStateInner.from_dict(ccc_marketing_state_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


