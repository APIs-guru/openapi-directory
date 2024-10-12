# PCAInner

PCA' means a personal current account. That is an account marketed to individuals rather than businesses, which provides the facility to place funds, withdraw cash, hold deposits and to execute payment transaction to and from third parties but does not include any of the following types of accounts:  (a) an account in which money is held on deposit in a currency other than sterling;  (b) current account mortgage, ie a single account comprising both a personal current account and a mortgage, which is regulated and marketed principally as a mortgage;   (c) savings accounts (including instant access savings accounts);   (d) credit card accounts where funds are usually paid in for the sole purpose of repaying a credit card debt; and  (e) e-money accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers. | 
**name** | **str** | The name of the PCA product used for marketing purposes from a customer perspective. I.e. what the customer would recognise. | 
**notes** | **List[str]** | Optional additional notes to supplement the product details | [optional] 
**on_sale_indicator** | **bool** | Indicates that the published product is OnSale(value 1) or Back Book (value 0)  | [optional] 
**pca_marketing_state** | [**List[PCAMarketingStateInner]**](PCAMarketingStateInner.md) | Describes the type of the known state (regular, promotional )  of the product. | 
**segment** | **List[str]** | Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  Follow us: Investopedia on Facebook  With respect to PCA products, they are segmented in relation to different markets that they wish to focus on. For example, Basic PCA products target consumers with poor credit history, Reward PCA products target consumers who spend a lot, and Premium products target High Net Worth individuals. | [optional] 

## Example

```python
from openapi_client.models.pca_inner import PCAInner

# TODO update the JSON string below
json = "{}"
# create an instance of PCAInner from a JSON string
pca_inner_instance = PCAInner.from_json(json)
# print the JSON string representation of the object
print(PCAInner.to_json())

# convert the object into a dict
pca_inner_dict = pca_inner_instance.to_dict()
# create an instance of PCAInner from a dict
pca_inner_from_dict = PCAInner.from_dict(pca_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


