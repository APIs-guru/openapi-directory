# BCAInner

BCA means a Business Current Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bca_marketing_state** | [**List[BCAMarketingStateInner]**](BCAMarketingStateInner.md) | The marketing state (promotional or regular) of the BCA Product. | 
**fee_free_length** | **float** | The length/duration of the fee free period | [optional] 
**fee_free_length_period** | **str** | The unit of period (days, weeks, months etc.) of the promotional length | [optional] 
**identification** | **str** | The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers. | 
**name** | **str** | The name of the BCA product used for marketing purposes from a customer perspective. I.e. what the customer would recognise. | 
**notes** | **List[str]** | Optional additional notes to supplement the product details | [optional] 
**on_sale_indicator** | **bool** | Indicates that the published product is OnSale(value 1) or Back Book (value 0)  | [optional] 
**segment** | **List[str]** | Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  Follow us: Investopedia on Facebook  With respect to BCA products, they are segmented in relation to different markets that they wish to focus on. | [optional] 

## Example

```python
from openapi_client.models.bca_inner import BCAInner

# TODO update the JSON string below
json = "{}"
# create an instance of BCAInner from a JSON string
bca_inner_instance = BCAInner.from_json(json)
# print the JSON string representation of the object
print(BCAInner.to_json())

# convert the object into a dict
bca_inner_dict = bca_inner_instance.to_dict()
# create an instance of BCAInner from a dict
bca_inner_from_dict = BCAInner.from_dict(bca_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


