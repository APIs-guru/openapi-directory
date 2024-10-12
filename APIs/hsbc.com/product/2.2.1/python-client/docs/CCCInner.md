# CCCInner

CCC means a Commercial Credit Card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ccc_marketing_state** | [**List[CCCMarketingStateInner]**](CCCMarketingStateInner.md) | The marketing state (promotional or regular) of the CCC Product. | 
**identification** | **str** | The unique ID that has been internally assigned by the financial institution to each of the Commercial Credit Card products they market to their retail and/or small to medium enterprise (SME) customers. | 
**name** | **str** | The name of the CCC product used for marketing purposes from a customer perspective. I.e. what the customer would recognise. | 
**segment** | **List[str]** | Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  Follow us: Investopedia on Facebook  With respect to CCC products, they are segmented in relation to different markets that they wish to focus on. | 

## Example

```python
from openapi_client.models.ccc_inner import CCCInner

# TODO update the JSON string below
json = "{}"
# create an instance of CCCInner from a JSON string
ccc_inner_instance = CCCInner.from_json(json)
# print the JSON string representation of the object
print(CCCInner.to_json())

# convert the object into a dict
ccc_inner_dict = ccc_inner_instance.to_dict()
# create an instance of CCCInner from a dict
ccc_inner_from_dict = CCCInner.from_dict(ccc_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


